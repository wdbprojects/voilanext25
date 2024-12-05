"use server";

import { z } from "zod";
import { loginFormSchema, registerFormSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/utils/db";
import { getUserByEmail } from "@/utils/queries";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

/* LOGIN ACTION */
export const loginAction = async (
  values: z.infer<typeof loginFormSchema>,
): Promise<{ error?: string; success?: string; info?: string } | undefined> => {
  const validatedFields = loginFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "An error occurred!" };
      }
    }
    throw error;
  }
};

/* REGISTER ACTION */
export const registerAction = async (
  values: z.infer<typeof registerFormSchema>,
): Promise<{ error?: string; success?: string; info?: string } | undefined> => {
  const validatedFields = registerFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { firstName, lastName, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "A user already exists with this email" };
  }
  await db.user.create({
    data: {
      name: `${firstName} ${lastName}`,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    },
  });
  return { success: "Registration successful" };
};
