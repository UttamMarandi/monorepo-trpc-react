import { t } from "../config/trpc";

const todos: any[] = ["todo1", "todo2", "todo3"];

export const todoRouter = t.router({
  all: t.procedure.query(() => {
    return todos;
  }),
});
