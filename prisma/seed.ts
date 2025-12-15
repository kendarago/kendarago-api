import { prisma } from "../src/lib/prisma";
import createSlug from "../src/lib/slug";

import { dataRentalCompanies } from "./data/rental-companies";

async function main() {
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
    console.log(`🗺️ Rental Companies: ${rentalCompany.name}`);
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
