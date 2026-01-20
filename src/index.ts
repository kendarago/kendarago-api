import { Scalar } from "@scalar/hono-api-reference";
import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "hono/logger";
import { cors } from "hono/cors";

import { rentalCompaniesRoute } from "./routes/rental-companies";
import { vehiclesRoute } from "./routes/vehicles";
import { userRoute } from "./routes/user";
import { authRoute } from "./routes/auth";
import { bookingsRoute } from "./routes/bookings";

const app = new OpenAPIHono();

app.use("*", logger());
app.use("*", cors());

app.route("/vehicles", vehiclesRoute);
app.route("/rental-companies", rentalCompaniesRoute);
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
