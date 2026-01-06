/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,rentalCompanySlug]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_slug_key" ON "Vehicle"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_name_rentalCompanySlug_key" ON "Vehicle"("name", "rentalCompanySlug");
