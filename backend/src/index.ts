import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";

import { trpcRouter } from "./trpc";

const app = express();
const PORT = 3000;

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  }),
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
