import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { prisma } from "../lib/prisma";
import {
  VehicleSchema,
  VehiclesIdSchema,
  VehiclesSchema,
  VehiclesSearchSchema,
} from "../module/vehicle-schema";

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
    const query = c.req.query();
    console.log({ query });
    const vehicles = await prisma.vehicle.findMany();
    return c.json(
      vehicles.map((v) => ({
        ...v,
        imageUrl: v.imageUrl ?? undefined,
      })),
      200,
    );
  },
);

vehiclesRoute.openapi(
  createRoute({
    method: "get",
    path: "/search",
    request: {
      query: VehiclesSearchSchema,
    },
    responses: {
      200: {
        content: { "application/json": { schema: VehiclesSchema } },
        description: "Get vehicles by query param",
      },
      404: {
        description: "Vehicle not found",
      },
    },
  }),
  async (c) => {
    const { q } = c.req.query();

    const foundVehicles = await prisma.vehicle.findMany({
      where: {
        name: {
          contains: q,
          mode: "insensitive", // recommended
        },
      },
    });

    if (!foundVehicles) {
      return c.json({ error: "Vehicle not found" }, 404);
    }

    return c.json(foundVehicles, 200);
  },
);

vehiclesRoute.openapi(
  createRoute({
    method: "get",
    path: "/{id}",
    request: {
      params: VehiclesIdSchema,
    },
    responses: {
      200: {
        content: { "application/json": { schema: VehicleSchema } },
        description: "Get vehicle by ID",
      },
      404: {
        description: "Vehicle not found",
      },
    },
  }),
  async (c) => {
    const id = c.req.param("id");

    const vehicle = await prisma.vehicle.findUnique({
      where: { id },
    });

    if (!vehicle) {
      return c.json({ error: "Product not found" }, 404);
    }
    return c.json(vehicle, 200);
  },
);
