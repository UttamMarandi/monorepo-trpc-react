import { t } from "../config/trpc";
import { z } from "zod";
import { todoSchema, TodoType } from "../models/todo";

const todos: TodoType[] = [];

export const todoRouter = t.router({
  all: t.procedure.query(() => {
    return todos;
  }),
  add: t.procedure.input(todoSchema).mutation(({ input }) => {
    todos.push(input);
    return todos;
  }),
});
// This input() method takes an input validation schema that defines what our incoming request body should look like.
