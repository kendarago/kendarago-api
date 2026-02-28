import { prisma } from "../src/lib/prisma";
import createSlug from "../src/lib/slug";
import { hashPassword } from "../src/lib/password";

import { dataRentalCompanies } from "./data/rental-companies";
import { dataVehicleTypes } from "./data/vehicle-types";
import { dataVehicles } from "./data/vehicles";

async function main() {
  const defaultProviderPassword = "password123";

  for (const seedRentalCompany of dataRentalCompanies) {
    const slug = createSlug(seedRentalCompany.name);

    const rentalCompany = await prisma.rentalCompany.upsert({
      where: { slug },
      update: {},
      create: {
        slug,
        ...seedRentalCompany,
      },
    });
    console.log(`🏬 Rental Companies: ${rentalCompany.name}`);

    const providerEmail = `${slug}@gmail.com`;

    await prisma.user.upsert({
      where: { email: providerEmail },
      update: {
        role: "PROVIDER",
        rentalCompanyId: rentalCompany.id,
      },
      create: {
        email: providerEmail,
        fullName: `${rentalCompany.name} (Provider)`,
        phoneNumber: rentalCompany.contact,
        role: "PROVIDER",
        rentalCompanyId: rentalCompany.id,
        password: {
          create: {
            hash: await hashPassword(defaultProviderPassword),
          },
        },
      },
    });

    console.log(
      `👤 Provider User: ${providerEmail} / ${defaultProviderPassword} (company: ${rentalCompany.name})`,
    );
  }

  for (const seedVehicleType of dataVehicleTypes) {
    const slug = createSlug(seedVehicleType.name);

    const vehicleType = await prisma.vehicleType.upsert({
      where: { slug },
      update: {},
      create: {
        slug,
        ...seedVehicleType,
      },
    });
    console.log(`🛞 Vehicle Type: ${vehicleType.name}`);
  }

  for (const seedVehicle of dataVehicles) {
    const slug = createSlug(seedVehicle.name);

    const vehicle = await prisma.vehicle.upsert({
      where: { slug },
      update: {},
      create: {
        slug,
        ...seedVehicle,
      },
    });
    console.log(`🏎️ Vehicle: ${vehicle.name}`);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
