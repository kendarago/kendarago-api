import { Scalar } from "@scalar/hono-api-reference";
import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "hono/logger";
import { cors } from "hono/cors";

import { rentalCompaniesRoute } from "./modules/rental-companies/route";
import { vehiclesRoute } from "./modules/vehicles/route";
import { userRoute } from "./modules/user/route";
import { authRoute } from "./modules/auth/route";
import { bookingsRoute } from "./modules/bookings/route";

const app = new OpenAPIHono();

app.use("*", logger());
app.use("*", cors());

app.route("/rental-companies", rentalCompaniesRoute);
app.route("/vehicles", vehiclesRoute);
app.route("/users", userRoute);
app.route("/auth", authRoute);
app.route("/bookings", bookingsRoute);

app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Kendarago API",
  },
});

app.get("/", Scalar({ url: "/openapi.json" }));

export default app;
