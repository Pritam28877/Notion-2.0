import { z } from "zod";
export const FromSchema = z.object({
  email: z.string().describe("Email").email({ message: "Invalid email" }),
  password: z.string().describe("Password").min(1, "Password is required"),
});
