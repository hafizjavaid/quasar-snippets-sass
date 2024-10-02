import { userActions } from "~/server/services/db/UserActions";
import { authActions } from "~/server/services/db/AuthActions";
import { sanitizeUser } from "~/server/utils/auth";
import type { OauthAccount } from '@prisma/client'
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
    } else if (!user.avatarUrl) {
        user = await userActions.updateUser(user.id, { avatarUrl: oauthUser.avatarUrl });
    }

    const connectedOauthAccount = await userActions.findOauthAccountByUserId(user.id);

    if (!connectedOauthAccount) {
        const oAuthId = generateIdFromEntropySize(10);
        await authActions.linkOAuthAccount(user.id, oauthUser.providerId, oauthUser.providerUserId, oAuthId);
    }

    return user;
}

export default oauthGitHubEventHandler({
    config: {
        emailRequired: true,
    },
    async onSuccess(event, { user }) {
        // console.log(user);

        const oauthUser = {
            email: user.email,
            name: user.name,
            avatarUrl: user.avatar_url,
            providerId: "github",
            // Convert to string
            providerUserId: user.id + '',
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
        console.error("GitHub OAuth error:", error);
        return sendRedirect(event, "/");
    },
});
