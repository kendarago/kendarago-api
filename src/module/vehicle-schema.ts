import { z } from "@hono/zod-openapi";
import { RentalCompanySchema } from "./rental-company-schema";

export const VehicleSchema = z.object({
  id: z.string(),
  name: z.string(),
  brand: z.string(),
  fuelType: z.string(),
  transmission: z.string(),
  engineCapacity: z.string(),
  imageUrl: z.string().optional().nullable(),
  year: z.number(),
  pricePerDay: z.number(),
  seatCapacity: z.number(),
  stock: z.number(),
  rentalCompanyId: z.string(),
  rentalCompany: RentalCompanySchema.optional(),
  vehicleTypeSlug: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const VehiclesSchema = z.array(VehicleSchema);

export const VehicleIdSchema = z.object({
  id: z.string(),
});

export const VehicleSlugSchema = z.object({
  rentalCompanySlug: z.string(),
  vehicleSlug: z.string(),
});

export const VehiclesSearchSchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  available: z.string().optional(),
});
