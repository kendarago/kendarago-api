import { z } from "@hono/zod-openapi";

export const BookingCreateSchema = z.object({
  rentalCompanyId: z.string().openapi({
    example: "clxxxx",
    description: "ID of the rental company",
  }),
  vehicleId: z.string().openapi({
    example: "cmk7ehvdt00004nsbwizsl6sq",
    description: "ID of the vehicle to book",
  }),
  startDate: z.string().openapi({
    example: "2026-01-19T22:09:14.827Z",
    description: "Start date of the booking (ISO 8601 format)",
  }),
  endDate: z.string().openapi({
    example: "2026-01-22T17:00:00.000Z",
    description: "End date of the booking (ISO 8601 format)",
  }),
});

export const BookingSchema = z.object({
  id: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  status: z.enum(["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"]),
  quantity: z.number(),
  vehicleId: z.string(),
  userId: z.string(),
  totalPrice: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const BookingWithRelationsSchema = BookingSchema.extend({
  vehicle: z.object({
    id: z.string(),
    name: z.string(),
    brand: z.string(),
    imageUrl: z.string().nullable(),
  }),
  user: z.object({
    id: z.string(),
    fullName: z.string(),
    email: z.string(),
  }),
});

export const BookingsListSchema = z.array(BookingWithRelationsSchema);

export type BookingCreate = z.infer<typeof BookingCreateSchema>;
export type Booking = z.infer<typeof BookingSchema>;
