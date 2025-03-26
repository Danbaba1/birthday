import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export type LoginFormData = z.infer<typeof schema>;

export default schema;
