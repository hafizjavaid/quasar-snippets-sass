import { authSchema } from "~/utils/validations";
import { sanitizeUser } from "~/server/utils/auth";
import { generateIdFromEntropySize } from "lucia";
import { hashPassword } from "~/server/utils/hash";



export default defineEventHandler(async (event) => {
    const { email, password, name } = await readValidatedBody(event, (body) =>
        authSchema.parse(body),
    );

    const existingUser = await db.user.findUnique({
        where: {
            email
        }
    });

    if (existingUser) {
        throw createError({
            statusCode: 400,
            statusMessage: "User already exists",
        });
    }

    const userId = generateIdFromEntropySize(10);
    const hashedPassword = await hashPassword(password);

    const user = await db.user.create({
        data: {
            id: userId,
            email,
            hashedPassword,
            name,
        }
    })

    setResponseStatus(event, 201);
    return sanitizeUser(user);
});
