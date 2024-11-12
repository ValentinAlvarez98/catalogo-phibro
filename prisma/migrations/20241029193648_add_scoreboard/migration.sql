-- AlterTable
ALTER TABLE "GameForm" ADD COLUMN     "scoreBoardId" TEXT;

-- CreateTable
CREATE TABLE "ScoreBoard" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "ScoreBoard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GameForm" ADD CONSTRAINT "GameForm_scoreBoardId_fkey" FOREIGN KEY ("scoreBoardId") REFERENCES "ScoreBoard"("id") ON DELETE SET NULL ON UPDATE CASCADE;
