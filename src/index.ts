import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";

import { rootRoute } from "./routes/root";
import { vehiclesRoute } from "./routes/vehicles";
import { rentalCompaniesRoute } from "./routes/rental-companies";

const app = new Hono();

const apiRoutes = app
  .basePath("/")
  .use("*", logger())
  .use("*", cors())
  .route("/", rootRoute)
  .route("/vehicles", vehiclesRoute)
  .route("/rental-companies", rentalCompaniesRoute);

export default app;

export type ApiRoutes = typeof apiRoutes;
