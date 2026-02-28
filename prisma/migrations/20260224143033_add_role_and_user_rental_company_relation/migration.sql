-- CreateEnum
CREATE TYPE "Role" AS ENUM ('RENTER', 'PROVIDER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "rentalCompanyId" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'RENTER';

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rentalCompanyId_fkey" FOREIGN KEY ("rentalCompanyId") REFERENCES "RentalCompany"("id") ON DELETE SET NULL ON UPDATE CASCADE;
