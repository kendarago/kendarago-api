import { Hono } from "hono";
import { dataVehicles } from "../../prisma/data/vehicles";

export const vehiclesRoute = new Hono()
  .get("/", (c) => {
    return c.json(dataVehicles);
  })

  .get("/search", (c) => {
    const q = c.req.query("q") || "";

    const foundVehicles = dataVehicles.filter((vehicle) => {
      return vehicle.name.toLowerCase().includes(q.toLowerCase());
    });
    console.log(foundVehicles);

    return c.json(foundVehicles);
  })

  .get("/:id", (c) => {
    const id = Number(c.req.param("id"));

    const vehicle = dataVehicles.find((vehicle) => {
      return vehicle.id === id;
    });

    if (!dataVehicles) {
      return c.notFound();
    }

    return c.json(vehicle);
  });
