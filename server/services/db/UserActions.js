class UserActions {
    async createUserWithOAuthAccount(payload) {
        try {
            const user = await db.user.create({
                data: {
                    email: payload.email,
                    name: payload.email,
                    avatarUrl: payload.avatarUrl,
                    emailVerified: true,
                }
            })
            return user;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to upsert user");
        }
    }
    async findOauthAccountByUserId(userId) {
        try {
            const oauthAccount = db.oauthAccount.findUnique({
                where: {
                    userId
                }
            })
            return oauthAccount || null;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to find OAuth account by user ID");
        }
    }
    async updateLastActive(userId) {
        try {
            const user = await db.user.update({
                data: {
                    lastActive: new Date()
                },
                where: {
                    id: userId
                }
            })
            return user;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to update last active");
        }
    }
}

export const userActions = new UserActions();
