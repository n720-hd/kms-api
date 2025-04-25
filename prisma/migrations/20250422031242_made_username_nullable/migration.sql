-- AlterTable
ALTER TABLE `admin` MODIFY `username` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `content_creators` MODIFY `username` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `username` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL;
