import { initTRPC } from "@trpc/server";

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return [
      { id: 1, title: "Idea 1", description: "Description of Idea 1" },
      { id: 2, title: "Idea 2", description: "Description of Idea 2" },
    ];
  }),
});

export type TrpcRouter = typeof trpcRouter;