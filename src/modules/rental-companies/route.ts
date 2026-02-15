import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { prisma } from "../../lib/prisma";

import {
  RentalCompaniesSchema,
  RentalCompanySchema,
  RentalCompanySlugSchema,
} from "./schema";
import { VehicleSchema, VehicleSlugSchema } from "../vehicles/schema";

export const rentalCompaniesRoute = new OpenAPIHono();

// Get distinct cities
rentalCompaniesRoute.openapi(
  createRoute({
    method: "get",
    path: "/cities",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.array(z.string()),
          },
        },
        description: "Get all distinct cities from rental companies",
      },
    },
  }),
  async (c) => {
    const companies = await prisma.rentalCompany.findMany({
      select: { city: true },
      distinct: ["city"],
      orderBy: { city: "asc" },
    });
    const cities = companies.map((c) => c.city);
    return c.json(cities);
  },
);

rentalCompaniesRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: { "application/json": { schema: RentalCompaniesSchema } },
        description: "Get all Rental Companies",
      },
    },
  }),

  async (c) => {
    const rentalCompanies = await prisma.rentalCompany.findMany({});
    return c.json(rentalCompanies);
  },
);

rentalCompaniesRoute.openapi(
  createRoute({
    method: "get",
    path: "/{slug}",
    request: {
      params: RentalCompanySlugSchema,
    },
    responses: {
      200: {
        content: { "application/json": { schema: RentalCompanySchema } },
        description: "Get Rental Company by Slug",
      },
      404: {
        description: "Rental Company not found",
      },
    },
  }),
  async (c) => {
    const slug = c.req.param("slug");

    const rentalCompany = await prisma.rentalCompany.findUnique({
      where: { slug },
      include: {
        vehicles: true,
      },
    });

    if (!rentalCompany) {
      return c.json({ error: "Rental Company not found" }, 404);
    }
    return c.json(rentalCompany);
  },
);

rentalCompaniesRoute.openapi(
  createRoute({
    method: "get",
    path: "/{rentalCompanySlug}/vehicles/{vehicleSlug}",
    request: {
      params: VehicleSlugSchema,
    },
    responses: {
      200: {
        content: { "application/json": { schema: VehicleSchema } },
        description: "Get Vehicle by Slug",
      },
      404: {
        description: "Vehicle not found",
      },
    },
  }),
  async (c) => {
    const rentalCompanySlug = c.req.param("rentalCompanySlug");
    const vehicleSlug = c.req.param("vehicleSlug");

    const vehicle = await prisma.vehicle.findUnique({
      where: {
        slug: vehicleSlug,
        rentalCompany: {
          slug: rentalCompanySlug,
        },
      },
      include: {
        rentalCompany: true,
      },
    });

    if (!vehicle) {
      return c.json({ error: "Vehicle not found" }, 404);
    }
    return c.json(vehicle);
  },
);
