/*
  Warnings:

  - The primary key for the `CurrentStream` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CurrentStream` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CurrentStream" DROP CONSTRAINT "CurrentStream_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "CurrentStream_pkey" PRIMARY KEY ("userId");
