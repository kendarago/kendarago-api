import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { Scalar } from "@scalar/hono-api-reference";

import { rootsRoute } from "./routes/roots";
import { vehiclesRoute } from "./routes/vehicles";

const app = new Hono();

const apiRoutes = app
  .basePath("/")
  .use("*", logger())
  .use("*", cors())
  .route("/", rootsRoute)
  .route("/vehicles", vehiclesRoute);

export default app;

export type ApiRoutes = typeof apiRoutes;
