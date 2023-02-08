-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('TODO', 'IN_PROGRESS', 'COMPLETED', 'CLOSED');

-- CreateEnum
CREATE TYPE "Targets" AS ENUM ('MAP', 'POI', 'ROAD');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('EXPERT', 'INTERMEDIATE', 'BEGINNER');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('HIGH', 'NORMAL', 'LOW');

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "no" SERIAL NOT NULL,
    "title" CHAR(50) NOT NULL,
    "description" CHAR(500),
    "detail" TEXT,
    "status" "TaskStatus" NOT NULL DEFAULT 'TODO',
    "targets" "Targets"[] DEFAULT ARRAY[]::"Targets"[],
    "level" "Level" NOT NULL DEFAULT 'BEGINNER',
    "priority" "Priority" NOT NULL DEFAULT 'NORMAL',
    "userId" TEXT NOT NULL,
    "workflowId" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workflow" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Workflow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "taskId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_title_key" ON "Task"("title");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;
