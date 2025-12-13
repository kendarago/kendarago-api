import { Hono } from "hono";

export const rootsRoute = new Hono().get("/", (c) => {
  return c.json({
    message: "Kendarago API",
    path: {
      schools: "/vehicles",
    },
  });
});
