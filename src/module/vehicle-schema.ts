import { z } from "@hono/zod-openapi";

export const VehicleSchema = z.object({
  name: z.string(),
  brand: z.string(),
  fuelType: z.string(),
  transmission: z.string(),
  engineCapacity: z.string(),
  imageUrl: z.string().optional(),
  year: z.number(),
  pricePerDay: z.number(),
  seatCapacity: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const VehiclesSchema = z.array(VehicleSchema);
