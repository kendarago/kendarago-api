// import { Hono } from "hono";
// import { Scalar } from "@scalar/hono-api-reference";

// export const rootsRoute = new Hono().get(
//   "/",
//   Scalar({ url: "/scalar", title: "Kendarago API", theme: "kepler" })
// );

import { Hono } from "hono";
import { Scalar } from "@scalar/hono-api-reference";

export const rootsRoute = new Hono().get(
  "/",
  Scalar({
    spec: {
      url: "/openapi.json", // <--- Harus mengarah ke app.doc() di index.ts
    },
    title: "Kendarago API",
    theme: "kepler",
  })
);
