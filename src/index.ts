import { Hono } from "hono";

const app = new Hono();

const vehicles = [{}];

app.get("/", (c) => {
  return c.json({
    message: "Kendarago API",
  });
});

app.get("/vehicles", (c) => {
  return c.json(vehicles);
});

app.get("/vehicles/:id", (c) => {
  const id = Number(c.req.param("id"));

  // const vehicle = vehicles.find((vehicle) => {
  //   return vehicle.id === id;
  // });

  if (!vehicles) {
    return c.notFound();
  }

  return c.json(vehicles);
});

export default app;
