import { OAuth2RequestError } from "arctic";
import { generateIdFromEntropySize } from "lucia";

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const code = query.code?.toString() ?? null;
	const state = query.state?.toString() ?? null;
	const storedState = getCookie(event, "github_oauth_state") ?? null;
	if (!code || !state || !storedState || state !== storedState) {
		throw createError({
			status: 400
		});
	}

	try {
		const tokens = await github.validateAuthorizationCode(code);
		const githubUserResponse = await fetch("https://api.github.com/user", {
			headers: {
				Authorization: `Bearer ${tokens.accessToken}`
			}
		});
		const githubUser: GitHubUser = await githubUserResponse.json();

		console.log('githubUser', githubUser);
		

		// Replace this with your own DB client.
		const existingUser = await db.user.findUnique({
            where: {
                email: githubUser.email ?  githubUser.email : githubUser.login
            }
        })

		if (existingUser) {
			const session = await lucia.createSession(existingUser.id, {});
			appendHeader(event, "Set-Cookie", lucia.createSessionCookie(session.id).serialize());
			return sendRedirect(event, "/");
		}

		const userId = generateIdFromEntropySize(10); // 16 characters long

		// Replace this with your own DB client.
		await db.user.create({
            data: {
                github_id: githubUser.id,
                email: githubUser.email ?  githubUser.email : githubUser.login, // username 
                id: userId,
                username: githubUser.login,
                image: githubUser.avatar_url
            }
        })

		const session = await lucia.createSession(userId, {});
		appendHeader(event, "Set-Cookie", lucia.createSessionCookie(session.id).serialize());
		return sendRedirect(event, "/");
	} catch (e) {
		// the specific error message depends on the provider
		if (e instanceof OAuth2RequestError) {
			// invalid code
			throw createError({
				status: 400
			});
		}
		throw createError({
			status: 500
		});
	}
});

interface GitHubUser {
    id: number;
    login: string;
    avatar_url: string;
    email?: string
}