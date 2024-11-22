import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "A valid email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "A valid email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
