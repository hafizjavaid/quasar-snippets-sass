import { userActions } from "~/server/services/db/UserActions";
import { authActions } from "~/server/services/db/AuthActions";
import { sanitizeUser } from "~/server/utils/auth";
import { generateIdFromEntropySize } from "lucia";

async function handleOAuthLogin(oauthUser: any) {
    let user = await userActions.findUserByEmail(oauthUser.email);
    if (!user) {
        const userId = generateIdFromEntropySize(10);
        user = await userActions.createUserWithOAuthAccount({
            email: oauthUser.email,
            name: oauthUser.name,
            avatarUrl: oauthUser.avatarUrl,
            emailVerified: true,
            id: userId
        });

        // Imagine someone used the email, and now trying to login with google, so we are just adding the avatar
    } else if (!user.avatarUrl) {
        user = await userActions.updateUser(user.id, { avatarUrl: oauthUser.avatarUrl });
    }


    const oAuthId = generateIdFromEntropySize(10);

    const connectedOauthAccount = await userActions.findOauthAccountByUserId(user.id);

    if (!connectedOauthAccount) {
        await authActions.linkOAuthAccount(user.id, oauthUser.providerId, oauthUser.providerUserId, oAuthId);
    }


    return user;
}

export default oauthGoogleEventHandler({
    async onSuccess(event, { user }) {
        const oauthUser = {
            email: user.email,
            name: user.name,
            avatarUrl: user.picture,
            providerId: "google",
            providerUserId: user.sub,
        };
        const dbUser = await handleOAuthLogin(oauthUser);
        if (dbUser.banned) {
            throw createError({
                statusCode: 403,
                statusMessage: "You account has been banned",
            });
        }
        const transformedUser = sanitizeUser(dbUser);
        if (transformedUser) {

            await setUserSession(event, { user: transformedUser });
        }
        return sendRedirect(event, "/");
    },
    onError(event, error) {
        console.error("Google OAuth error:", error);
        return sendRedirect(event, "/");
    },
});
