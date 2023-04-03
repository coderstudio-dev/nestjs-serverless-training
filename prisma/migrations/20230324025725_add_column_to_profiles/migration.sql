/*
  Warnings:

  - Added the required column `slug` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "articles" ADD COLUMN "slug" TEXT NOT NULL;
