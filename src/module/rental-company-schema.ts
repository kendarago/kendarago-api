import { z } from "@hono/zod-openapi";

export const RentalCompanySchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  address: z.string(),
  city: z.string(),
  operatingHours: z.string(),
  contact: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const RentalCompaniesSchema = z.array(RentalCompanySchema);

export const RentalCompanySlugSchema = z.object({
  slug: z.string(),
});
