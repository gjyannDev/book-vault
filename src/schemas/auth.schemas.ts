import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10, "Password must be atleast 10 characters"),
});
