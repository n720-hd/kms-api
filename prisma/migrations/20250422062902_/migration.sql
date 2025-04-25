/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `content_creators` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `admin_token_key` ON `admin`(`token`);

-- CreateIndex
CREATE UNIQUE INDEX `content_creators_token_key` ON `content_creators`(`token`);

-- CreateIndex
CREATE UNIQUE INDEX `users_token_key` ON `users`(`token`);
