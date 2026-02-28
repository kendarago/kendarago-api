import { z } from "@hono/zod-openapi";

export const AuthSignupSchema = z.object({
  email: z.string(),
  fullName: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
});

export const AuthSignupProviderSchema = z.object({
  email: z.string(),
  fullName: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  companyName: z.string(),
  address: z.string(),
  city: z.string(),
  operatingHours: z.string(),
  contact: z.string(),
});

export const AuthSigninSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const AuthSigninSuccessSchema = z.string();

export const AuthHeaderSchema = z.object({
  Authorization: z.string().openapi({
    example: "Bearer TOKEN",
  }),
});

export const AuthMeSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  role: z.enum(["RENTER", "PROVIDER"]),
  rentalCompanyId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
