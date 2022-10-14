/*
  Warnings:

  - Added the required column `estatus_prestamo` to the `Prestamos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Prestamos` ADD COLUMN `estatus_prestamo` VARCHAR(191) NOT NULL;
