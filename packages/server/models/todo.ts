import { z } from "zod";

const generateRandomId = () => {
  return Math.floor(Math.random() * 10000 + 1);
};

export const todoSchema = z.object({
  id: z.number().default(generateRandomId()),
  title: z.string(),
  completed: z.boolean().default(false),
});

export type TodoType = z.infer<typeof todoSchema>;
