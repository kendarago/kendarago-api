import { z } from "@hono/zod-openapi";

export const VehicleSchema = z.object({
  id: z.string(),
  name: z.string(),
  brand: z.string(),
  fuelType: z.string(),
  transmission: z.string(),
  engineCapacity: z.string(),
  imageUrl: z.string().optional(),
  year: z.number(),
  pricePerDay: z.number(),
  seatCapacity: z.number(),
  stock: z.number(),
  rentalCompanySlug: z.string(),
  vehicleTypeSlug: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const VehiclesSchema = z.array(VehicleSchema);

export const VehiclesIdSchema = z.object({
  id: z.string(),
});

export const VehiclesSearchSchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  available: z.string().optional(),
});
