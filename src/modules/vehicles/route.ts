import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { prisma } from "../../lib/prisma";

import {
  VehicleIdSchema,
  VehicleSchema,
  VehiclesSchema,
  VehiclesSearchSchema,
} from "./schema";

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
    const { q, category, available, city } = c.req.query();
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
        ...(available === "true" && {
          stock: {
            gt: 0,
          },
        }),
        ...(city && {
          rentalCompany: {
            city: {
              equals: city,
              mode: "insensitive",
            },
          },
        }),
      },
      include: {
        rentalCompany: true,
      },
    });
    return c.json(vehicles);
  },
);

vehiclesRoute.openapi(
  createRoute({
    method: "get",
    path: "/{id}",
    request: {
      params: VehicleIdSchema,
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
      include: {
        rentalCompany: true,
      },
    });

    if (!vehicle) {
      return c.json({ error: "Product not found" }, 404);
    }
    return c.json(vehicle, 200);
  },
);
