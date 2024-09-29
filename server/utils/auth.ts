import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient, type User } from "@prisma/client";
import { GitHub } from "arctic";
import type { H3Event } from 'h3';


export const db = new PrismaClient();
const adapter = new PrismaAdapter(db.session, db.user);
export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !import.meta.dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			githubId: attributes.github_id,
			email: attributes.email,
			username: attributes.username,
			image: attributes.image

		};
	}
});

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: Omit<User, 'id'>;
	}
}

export const github = new GitHub(process.env.GITHUB_CLIENT_ID!, process.env.GITHUB_CLIENT_SECRET!);



export const validateRequest = async (event: H3Event) => {
	if (!event.context.user) {
		throw createError({
			statusCode: 401,
			statusMessage: 'Unauthorized',
		});
	}
}


/*
 * This function is used to remove sensitive information from the user object
 *
 * @param user - The user object to sanitize
 * @returns The sanitized user object
 */
export const sanitizeUser = (user: User) => {
	if (!user) return null;
	// @ts-ignore
	delete user.hashedPassword;
	return user;
};