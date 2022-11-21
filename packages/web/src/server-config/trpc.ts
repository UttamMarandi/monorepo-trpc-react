import { createTRPCReact } from "@trpc/react";
import { AppRouter } from "server/routers";

export const trpc = createTRPCReact<AppRouter>();
