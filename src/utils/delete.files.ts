import fs from 'fs/promises';
import { deleteFileFromS3, extractKeyFromUrl } from './s3';

export const deleteFiles = async({fileToDelete}:{fileToDelete : {file : {path: string}[]}}) => {
    try {
        await Promise.all(
            fileToDelete.file.map(async(item) => {
                try {
                    console.log('🗑️ Deleting file:', item.path);
                    
                    // Check if it's an S3 URL
                    if (item.path.includes('amazonaws.com') || item.path.includes(process.env.AWS_CLOUDFRONT_DOMAIN || '')) {
                        console.log('📦 Detected S3 URL, extracting key...');
                        // Delete from S3
                        const key = extractKeyFromUrl(item.path);
                        console.log('🔑 Extracted S3 key:', key);
                        await deleteFileFromS3(key);
                        console.log('✅ S3 file deleted successfully');
                    } else {
                        console.log('📁 Detected local file, deleting...');
                        // Delete from local storage
                        await fs.access(item.path)
                        await fs.unlink(item.path)
                        console.log('✅ Local file deleted successfully');
                    }
                } catch (error) {
                    console.error('❌ Error deleting file:', error);
                    throw {msg: 'Error Deleting File'};
                }
            })
        )
    } catch (error) {
        console.error('❌ Failed deleting files:', error);
        throw {msg: 'Failed Deleting File'};
    }
}

// New function specifically for S3 file deletion
export const deleteS3Files = async(keys: string[]) => {
    try {
        await Promise.all(
            keys.map(async(key) => {
                try {
                    await deleteFileFromS3(key);
                } catch (error) {
                    console.error('Error deleting S3 file:', error);
                    throw {msg: 'Error Deleting S3 File'};
                }
            })
        )
    } catch (error) {
        throw {msg: 'Failed Deleting S3 Files'};
    }
}