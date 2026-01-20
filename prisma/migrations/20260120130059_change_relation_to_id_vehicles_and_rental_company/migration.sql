/*
  Warnings:

  - You are about to drop the column `rentalCompanySlug` on the `Vehicle` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,rentalCompanyId]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rentalCompanyId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_rentalCompanySlug_fkey";

-- DropIndex
DROP INDEX "Vehicle_name_rentalCompanySlug_key";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "rentalCompanySlug",
ADD COLUMN     "rentalCompanyId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_name_rentalCompanyId_key" ON "Vehicle"("name", "rentalCompanyId");

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_rentalCompanyId_fkey" FOREIGN KEY ("rentalCompanyId") REFERENCES "RentalCompany"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
