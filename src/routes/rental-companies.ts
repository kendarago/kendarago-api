import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { prisma } from "../lib/prisma";
import {
  RentalCompaniesSchema,
  RentalCompanySchema,
  RentalCompanySlugSchema,
} from "../module/rental-company-schema";

export const rentalCompaniesRoute = new OpenAPIHono();

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
  }
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
    return c.json({
      message: "Get Rental Company by slug and its vehicles",
      data: rentalCompany,
    });
  }
);
