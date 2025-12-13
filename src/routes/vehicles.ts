import { Hono } from "hono";

const vehicles = [{}];

export const vehiclesRoute = new Hono()
  .get("/", (c) => {
    return c.json(vehicles);
  })

  .get("/:slug", (c) => {
    const id = Number(c.req.param("id"));

    // const vehicle = vehicles.find((vehicle) => {
    //   return vehicle.id === id;
    // });

    if (!vehicles) {
      return c.notFound();
    }

    return c.json(vehicles);
  });
