import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";

import { appRouter } from "./routers";

const app = express();

const port = 8080;

app.use(express.json());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
