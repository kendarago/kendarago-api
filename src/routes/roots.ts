import { Hono } from "hono";

export const rootsRoute = new Hono().get("/", (c) => {
  return c.json({
    message: "Kendarago API",
    description:
      "A backend API for Kendarago, a web-based application designed to facilitate vehicle rentals. Built with Bun, Hono, Prisma, and PostgreSQL.",
    path: {
      schools: "/vehicles",
    },
  });
});
