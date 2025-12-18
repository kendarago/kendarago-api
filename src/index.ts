// import { OpenAPIHono } from "@hono/zod-openapi";
// // import { Hono } from "hono";
// import { logger } from "hono/logger";
// import { cors } from "hono/cors";
// import { Scalar } from "@scalar/hono-api-reference";

// import { rootsRoute } from "./routes/root";
// import { vehiclesRoute } from "./routes/vehicles";
// import { rentalCompaniesRoute } from "./routes/rental-companies";
// import { userRoute } from "./routes/user";

// const app = new OpenAPIHono();

// const apiRoutes = app
//   .basePath("/")
//   .use("*", logger())
//   .use("*", cors())
//   .route("/", rootsRoute)
//   .route("/vehicles", vehiclesRoute)
//   .route("/rental-companies", rentalCompaniesRoute)
//   .route("/users", userRoute);

// // TAMBAHKAN INI: Ini akan membuat endpoint http://localhost:3000/openapi.json
// app.doc("/openapi.json", {
//   openapi: "3.0.0",
//   info: {
//     version: "1.0.0",
//     title: "Kendarago API",
//   },
// });

// export default app;

// index.ts
import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { rootsRoute } from "./routes/root";
import { vehiclesRoute } from "./routes/vehicles";
import { rentalCompaniesRoute } from "./routes/rental-companies";
import { userRoute } from "./routes/user";
import { authRoute } from "./routes/auth";

const app = new OpenAPIHono();

// 1. Middleware Global
app.use("*", logger());
app.use("*", cors());

// 2. DAFTARKAN SEMUA ROUTE DULU (PENTING!)
// Hono perlu mencatat route ini sebelum men-generate JSON-nya
app.route("/", rootsRoute);
app.route("/vehicles", vehiclesRoute);
app.route("/rental-companies", rentalCompaniesRoute);
app.route("/users", userRoute);
app.route("/auth", authRoute);

// 3. GENERATE OPENAPI DOCUMENT DI AKHIR
// Pindahkan blok ini ke paling bawah agar bisa mendeteksi route di atas
app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Kendarago API",
  },
});

export default app;
// export type ApiRoutes = typeof apiRoutes;
