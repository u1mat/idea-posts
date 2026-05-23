import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { trpcRouter } from "./trpc";

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "trpc-accept"],
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, trpc-accept",
  );

  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }

  next();
  return;
});
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  }),
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
