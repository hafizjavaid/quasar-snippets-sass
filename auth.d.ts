// auth.d.ts
declare module '#auth-utils' {
    interface User {
        id: string;
        email: string;
        emailVerified: boolean;
        role: 'USER' | 'ADMIN'; // Assuming 'USER' is not the only role
        name: string;
        avatarUrl: string;
        banned: boolean;
        bannedReason: string | null;
        onboarded: boolean;
    }

    interface UserSession {
        // Add your own fields
    }

    interface SecureSessionData {
        // Add your own fields
    }
}

export { }