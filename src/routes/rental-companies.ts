import { Hono } from "hono";
import { prisma } from "../lib/prisma";

export const rentalCompaniesRoute = new Hono()
  .get("/", async (c) => {
    const rentalCompanies = await prisma.rentalCompany.findMany();
    return c.json({
      message: "Get All Rental Company",
      data: rentalCompanies,
    });
  })

  .get("/:slug", async (c) => {
    const slug = c.req.param("slug");

    const rentalCompany = await prisma.rentalCompany.findUnique({
      where: { slug },
      include: {
        vehicles: true,
      },
    });

    if (!rentalCompany) {
      return c.notFound();
    }

    return c.json({
      message: "Get Rental Company by slug and its vehicles",
      data: rentalCompany,
    });
  });
