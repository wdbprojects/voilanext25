"use server";

import { z } from "zod";
import { loginFormSchema, registerFormSchema } from "@/schemas";

export const loginAction = async (
  values: z.infer<typeof loginFormSchema>,
): Promise<{ error?: string; success?: string; info?: string } | undefined> => {
  const validatedFields = loginFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  return { success: "Login successful" };
};

export const registerAction = async (
  values: z.infer<typeof registerFormSchema>,
): Promise<{ error?: string; success?: string; info?: string } | undefined> => {
  const validatedFields = registerFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  console.log(validatedFields);

  return { success: "Registration successful" };
};
