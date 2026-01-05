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
    request: {
      query: VehiclesSearchSchema,
    },
    responses: {
      200: {
        content: { "application/json": { schema: VehiclesSchema } },
        description: "Get all vehicles",
      },
    },
  }),
  async (c) => {
    const { q, category } = c.req.query();
    const vehicles = await prisma.vehicle.findMany({
      where: {
        name: q
          ? {
              contains: q,
              mode: "insensitive",
            }
          : undefined,
        vehicleTypeSlug: category
          ? {
              equals: category,
            }
          : undefined,
      },
    });
    console.log({ category });
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
    const { q, category } = c.req.query();

    const foundVehicles = await prisma.vehicle.findMany({
      where: {
        name: q
          ? {
              contains: q,
              mode: "insensitive",
            }
          : undefined,
        vehicleTypeSlug: category
          ? {
              equals: category,
            } 
          : undefined,
      },
    });

    if (!foundVehicles || foundVehicles.length === 0) {
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
