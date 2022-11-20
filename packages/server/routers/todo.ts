import { t } from "../config/trpc";
import { z } from "zod";
import { todoSchema, TodoType } from "../models/todo";
import { TRPCError } from "@trpc/server";

let todos: TodoType[] = [];

export const todoRouter = t.router({
  all: t.procedure.query(() => {
    return todos;
  }),
  add: t.procedure.input(todoSchema).mutation(({ input }) => {
    todos.push(input);
    return todos;
  }),
  delete: t.procedure.input(z.number()).mutation(({ input }) => {
    const filteredTodos = todos.filter((todo) => todo.id !== input);
    todos = [...filteredTodos];
    return todos;
  }),
  update: t.procedure.input(todoSchema.partial()).mutation(({ input }) => {
    // .partial() makes all the field optional
    const index = todos.findIndex((todo) => todo.id === input.id);
    const todo = todos?.[index];

    if (!todo) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Given id does not exist",
      });
    }

    todos[index] = {
      ...todo,
      ...input, // overwrite with provided input fields
    };

    return todos[index];
  }),
});
// This input() method takes an input validation schema that defines what our incoming request body should look like.
