
class AuthActions {

    async linkOAuthAccount(userId, providerId, providerUserId, id) {
        try {
            const record = await db.oauthAccount.create({
                data: {
                    userId,
                    providerId,
                    providerUserId,
                    id
                }
            })
            return record;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to link OAuth account");
        }
    }


}

export const authActions = new AuthActions();
