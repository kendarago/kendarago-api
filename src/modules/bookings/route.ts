import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { AuthHeaderSchema } from "../auth/schema";
import {
  BookingCreateSchema,
  BookingDetailSchema,
  BookingsListSchema,
  BookingWithRelationsSchema,
} from "./schema";
import { checkAuthorized } from "../auth/middleware";
import { prisma } from "../../lib/prisma";

export const bookingsRoute = new OpenAPIHono();

// POST /bookings - Create a new booking
bookingsRoute.openapi(
  createRoute({
    method: "post",
    path: "/",
    request: {
      headers: AuthHeaderSchema,
      body: {
        content: { "application/json": { schema: BookingCreateSchema } },
      },
    },
    middleware: checkAuthorized,
    responses: {
      201: {
        content: { "application/json": { schema: BookingWithRelationsSchema } },
        description: "Booking created successfully",
      },
      400: {
        description: "Bad request - Invalid data",
      },
      401: {
        description: "Unauthorized - User not authenticated",
      },
      404: {
        description: "Vehicle not found",
      },
    },
  }),
  async (c) => {
    const user = c.get("user");
    const body = c.req.valid("json");

    try {
      // Check if vehicle exists
      const vehicle = await prisma.vehicle.findUnique({
        where: { id: body.vehicleId },
      });

      if (!vehicle) {
        return c.json({ message: "Vehicle not found" }, 404);
      }

      // Calculate total price on server side
      const startDate = new Date(body.startDate);
      const endDate = new Date(body.endDate);
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const totalPrice = diffDays * vehicle.pricePerDay;

      // Create the booking
      const booking = await prisma.booking.create({
        data: {
          startDate,
          endDate,
          totalPrice,
          vehicleId: body.vehicleId,
          userId: user.id,
        },
        include: {
          vehicle: {
            select: {
              id: true,
              name: true,
              brand: true,
              imageUrl: true,
            },
          },
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
        },
      });

      return c.json(booking, 201);
    } catch (error) {
      return c.json({ message: "Failed to create booking" }, 400);
    }
  },
);

// GET /bookings - Get all bookings for authenticated user
bookingsRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    request: {
      headers: AuthHeaderSchema,
    },
    middleware: checkAuthorized,
    responses: {
      200: {
        content: { "application/json": { schema: BookingsListSchema } },
        description: "List of user bookings",
      },
      401: {
        description: "Unauthorized - User not authenticated",
      },
    },
  }),
  async (c) => {
    const user = c.get("user");

    const bookings = await prisma.booking.findMany({
      where: { userId: user.id },
      include: {
        vehicle: {
          select: {
            id: true,
            name: true,
            brand: true,
            imageUrl: true,
          },
        },
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return c.json(bookings, 200);
  },
);

// GET /bookings/:id - Get a single booking by ID
bookingsRoute.openapi(
  createRoute({
    method: "get",
    path: "/{id}",
    request: {
      headers: AuthHeaderSchema,
      params: z.object({ id: z.string() }),
    },
    middleware: checkAuthorized,
    responses: {
      200: {
        content: { "application/json": { schema: BookingDetailSchema } },
        description: "Booking details",
      },
      401: {
        description: "Unauthorized - User not authenticated",
      },
      404: {
        description: "Booking not found",
      },
    },
  }),
  async (c) => {
    const user = c.get("user");
    const { id } = c.req.valid("param");

    const booking = await prisma.booking.findFirst({
      where: { id, userId: user.id },
      include: {
        vehicle: {
          select: {
            id: true,
            name: true,
            brand: true,
            imageUrl: true,
            transmission: true,
            seatCapacity: true,
            engineCapacity: true,
            pricePerDay: true,
            rentalCompany: {
              select: {
                id: true,
                name: true,
                address: true,
                city: true,
                operatingHours: true,
                contact: true,
              },
            },
          },
        },
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phoneNumber: true,
          },
        },
      },
    });

    if (!booking) {
      return c.json({ message: "Booking not found" }, 404);
    }

    return c.json(booking, 200);
  },
);
