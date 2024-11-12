/*
  Warnings:

  - You are about to drop the column `ci` on the `GameForm` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `GameForm` table. All the data in the column will be lost.
  - You are about to drop the column `ci` on the `ScoreBoard` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ScoreBoard" DROP CONSTRAINT "ScoreBoard_ci_fkey";

-- DropIndex
DROP INDEX "GameForm_ci_key";

-- DropIndex
DROP INDEX "ScoreBoard_ci_key";

-- AlterTable
ALTER TABLE "GameForm" DROP COLUMN "ci",
DROP COLUMN "phone",
ADD COLUMN     "country" TEXT NOT NULL DEFAULT 'Uruguay';

-- AlterTable
ALTER TABLE "ScoreBoard" DROP COLUMN "ci";
