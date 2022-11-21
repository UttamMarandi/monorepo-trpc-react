import { trpc } from "../../server-config/trpc";

export const useTodosQuery = () => {
  return trpc.todo.all.useQuery();
};
