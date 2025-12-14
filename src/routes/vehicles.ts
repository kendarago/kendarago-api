import { Hono } from "hono";
import { dataVehicles } from "../../prisma/data/vehicles";

export const vehiclesRoute = new Hono()
  .get("/", (c) => {
    return c.json({
      message: "Get All Vehicles",
      data: dataVehicles,
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

  .get("/:id", (c) => {
    const id = Number(c.req.param("id"));

    const vehicle = dataVehicles.find((vehicle) => {
      return vehicle.id === id;
    });

    if (!dataVehicles) {
      return c.notFound();
    }

    return c.json({
      message: "Get Vehicles by id",
      data: vehicle,
    });
  });
