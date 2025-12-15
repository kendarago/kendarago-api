/*
  Warnings:

  - Made the column `rentalCompanySlug` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.
  - Made the column `vehicleTypeSlug` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_rentalCompanySlug_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_vehicleTypeSlug_fkey";

-- AlterTable
ALTER TABLE "Vehicle" ALTER COLUMN "rentalCompanySlug" SET NOT NULL,
ALTER COLUMN "vehicleTypeSlug" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_rentalCompanySlug_fkey" FOREIGN KEY ("rentalCompanySlug") REFERENCES "RentalCompany"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_vehicleTypeSlug_fkey" FOREIGN KEY ("vehicleTypeSlug") REFERENCES "VehicleType"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
