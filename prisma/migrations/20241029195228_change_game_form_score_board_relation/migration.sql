/*
  Warnings:

  - You are about to drop the column `scoreBoardId` on the `GameForm` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ci]` on the table `ScoreBoard` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ci` to the `ScoreBoard` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GameForm" DROP CONSTRAINT "GameForm_scoreBoardId_fkey";

-- AlterTable
ALTER TABLE "GameForm" DROP COLUMN "scoreBoardId";

-- AlterTable
ALTER TABLE "ScoreBoard" ADD COLUMN     "ci" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ScoreBoard_ci_key" ON "ScoreBoard"("ci");

-- AddForeignKey
ALTER TABLE "ScoreBoard" ADD CONSTRAINT "ScoreBoard_ci_fkey" FOREIGN KEY ("ci") REFERENCES "GameForm"("ci") ON DELETE RESTRICT ON UPDATE CASCADE;
