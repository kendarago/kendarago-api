import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { prisma } from "../lib/prisma";
import { VehiclesSchema } from "../module/vehicle-schema";

export const vehiclesRoute = new OpenAPIHono();

vehiclesRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: { "application/json": { schema: VehiclesSchema } },
        description: "Get all vehicles",
      },
    },
  }),
  async (c) => {
    const vehicles = await prisma.vehicle.findMany();
    return c.json(
      vehicles.map((v) => ({
        ...v,
        imageUrl: v.imageUrl ?? undefined,
      })),
      200
    );
  }
);
// .get("/", async (c) => {
//   const vehicles = await prisma.vehicle.findMany();
//   return c.json({
//     message: "Get All Vehicles",
//     data: vehicles,
//   });
// })

// .get("/search", async (c) => {
//   const q = c.req.query("q") || "";
//   const keyword = q.toLowerCase();

//   const foundVehicles = await prisma.vehicle.findMany({
//     where: {
//       name: {
//         contains: keyword,
//       },
//     },
//   });

//   return c.json({
//     message: "Get Vehicles by Query Params",
//     data: foundVehicles,
//   });
// })

// .get("/:id", async (c) => {
//   const id = c.req.param("id");

//   const vehicle = await prisma.vehicle.findUnique({
//     where: { id },
//   });

//   if (!vehicle) {
//     return c.notFound();
//   }

//   return c.json({
//     message: "Get Vehicles by id",
//     data: vehicle,
//   });
// });
