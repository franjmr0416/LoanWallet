/*
  Warnings:

  - You are about to drop the column `rol` on the `Usuarios` table. All the data in the column will be lost.
  - Added the required column `admin` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Usuarios` DROP COLUMN `rol`,
    ADD COLUMN `admin` BOOLEAN NOT NULL,
    MODIFY `telefono` VARCHAR(191) NOT NULL;
