import { PrismaClient, type User } from "@prisma/client";

export const db = new PrismaClient();

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