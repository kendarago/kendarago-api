import { Hono } from "hono";
import { dataVehicles } from "../../prisma/data/vehicles";
import { prisma } from "../lib/prisma";

export const vehiclesRoute = new Hono()
  .get("/", async (c) => {
    const vehicles = await prisma.vehicle.findMany();
    return c.json({
      message: "Get All Vehicles",
      data: vehicles,
    });
  })

  .get("/search", (c) => {
    const q = c.req.query("q") || "";
    const keyword = q.toLowerCase();

    const foundVehicles = dataVehicles.filter((vehicle) => {
      return vehicle.name.toLowerCase().includes(keyword);
    });

    return c.json({
      message: "Get Vehicles by Query Params",
      data: foundVehicles,
    });
  })

  .get("/:id", async (c) => {
    const id = c.req.param("id");

    const vehicle = await prisma.vehicle.findUnique({
      where: { id },
    });

    if (!dataVehicles) {
      return c.notFound();
    }

    return c.json({
      message: "Get Vehicles by id",
      data: vehicle,
    });
  });
