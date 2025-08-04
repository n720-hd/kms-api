import { S3Client, PutObjectCommand, DeleteObjectCommand, HeadObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import multer from 'multer';
import { config } from 'dotenv';

config();

// Configure AWS S3 Client
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME!;
const CLOUDFRONT_DOMAIN = process.env.AWS_CLOUDFRONT_DOMAIN;

// File filter function
const fileFilter = (_req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedTypes = ['png', 'jpg', 'jpeg', 'gif', 'pdf', 'docx', 'xlsx'];
  const fileExtension = file.originalname.split('.').pop()?.toLowerCase();
  
  if (!fileExtension || !allowedTypes.includes(fileExtension)) {
    return cb(null, false);
  }
  return cb(null, true);
};

const profileFileFilter = (_req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedTypes = ['png', 'jpg', 'jpeg'];
  const fileExtension = file.originalname.split('.').pop()?.toLowerCase();
  
  if (!fileExtension || !allowedTypes.includes(fileExtension)) {
    return cb(null, false);
  }
  return cb(null, true);
};

// Custom S3 storage engine for multer (since multer-s3 v3 compatibility is limited)
class S3Storage {
  private folder: string;

  constructor(folder: string = 'attachments') {
    this.folder = folder;
  }

  _handleFile(req: any, file: Express.Multer.File, cb: any) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileName = `${file.fieldname}-${uniqueSuffix}-${file.originalname}`;
    const key = `${this.folder}/${fileName}`;

    // Collect the stream data into a buffer first
    const chunks: Buffer[] = [];
    
    file.stream.on('data', (chunk: Buffer) => {
      chunks.push(chunk);
    });

    file.stream.on('end', async () => {
      try {
        const buffer = Buffer.concat(chunks);
        
        const uploadParams = {
          Bucket: BUCKET_NAME,
          Key: key,
          Body: buffer,
          ContentType: file.mimetype,
          ContentLength: buffer.length,
        };

        const command = new PutObjectCommand(uploadParams);
        await s3Client.send(command);

        const url = getFileUrl(key);
        cb(null, {
          bucket: BUCKET_NAME,
          key: key,
          location: url,
          originalname: file.originalname,
          filename: fileName,
          mimetype: file.mimetype,
          size: buffer.length,
        });
      } catch (error) {
        console.error('S3 upload error:', error);
        cb(error);
      }
    });

    file.stream.on('error', (error: any) => {
      console.error('Stream error:', error);
      cb(error);
    });
  }

  _removeFile(req: any, file: any, cb: any) {
    deleteFileFromS3(file.key)
      .then(() => cb(null))
      .catch((error) => cb(error));
  }
}

// Storage configurations
const s3Storage = new S3Storage('attachments');
const s3ProfileStorage = new S3Storage('profiles');

// Multer configurations
export const uploadS3Attachments = multer({
  storage: s3Storage as any,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 8, // 8MB
  },
});

export const uploadS3ProfilePicture = multer({
  storage: s3ProfileStorage as any,
  fileFilter: profileFileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },
});

// Utility functions
export const deleteFileFromS3 = async (key: string): Promise<void> => {
  try {
    console.log(`🚀 Attempting to delete S3 file with key: ${key}`);
    console.log(`📍 Bucket: ${BUCKET_NAME}`);
    
    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });
    
    const result = await s3Client.send(command);
    console.log(`✅ S3 delete result:`, result);
    console.log(`✅ File deleted successfully from S3: ${key}`);
  } catch (error) {
    console.error('❌ Error deleting file from S3:', error);
    console.error('❌ Key that failed:', key);
    console.error('❌ Bucket:', BUCKET_NAME);
    throw new Error('Failed to delete file from S3');
  }
};

export const deleteMultipleFilesFromS3 = async (keys: string[]): Promise<void> => {
  try {
    const deletePromises = keys.map(key => deleteFileFromS3(key));
    await Promise.all(deletePromises);
  } catch (error) {
    console.error('Error deleting multiple files from S3:', error);
    throw new Error('Failed to delete files from S3');
  }
};

export const generateSignedUrl = async (key: string, expiresIn: number = 3600): Promise<string> => {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });
    
    return await getSignedUrl(s3Client, command, { expiresIn });
  } catch (error) {
    console.error('Error generating signed URL:', error);
    throw new Error('Failed to generate signed URL');
  }
};

export const checkFileExists = async (key: string): Promise<boolean> => {
  try {
    const command = new HeadObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });
    
    await s3Client.send(command);
    return true;
  } catch (error) {
    return false;
  }
};

export const getFileUrl = (key: string): string => {
  if (CLOUDFRONT_DOMAIN) {
    return `${CLOUDFRONT_DOMAIN}/${key}`;
  }
  return `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION || 'us-east-1'}.amazonaws.com/${key}`;
};

export const extractKeyFromUrl = (url: string): string => {
  if (CLOUDFRONT_DOMAIN && url.includes(CLOUDFRONT_DOMAIN)) {
    return url.replace(`${CLOUDFRONT_DOMAIN}/`, '');
  }
  
  const s3Pattern = new RegExp(`https://${BUCKET_NAME}\\.s3\\.[^/]+\\.amazonaws\\.com/(.+)`);
  const match = url.match(s3Pattern);
  return match ? match[1] : url;
};

// Upload single file directly (for programmatic uploads)
export const uploadFileToS3 = async (
  file: Buffer,
  fileName: string,
  mimeType: string,
  folder: string = 'attachments'
): Promise<{ key: string; url: string }> => {
  try {
    const key = `${folder}/${fileName}`;
    
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: file,
      ContentType: mimeType,
    });
    
    await s3Client.send(command);
    
    return {
      key,
      url: getFileUrl(key),
    };
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw new Error('Failed to upload file to S3');
  }
};

// Upload multiple files
export const uploadMultipleFilesToS3 = async (
  files: { buffer: Buffer; fileName: string; mimeType: string }[],
  folder: string = 'attachments'
): Promise<{ key: string; url: string }[]> => {
  try {
    const uploadPromises = files.map(file => 
      uploadFileToS3(file.buffer, file.fileName, file.mimeType, folder)
    );
    
    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error('Error uploading multiple files to S3:', error);
    throw new Error('Failed to upload files to S3');
  }
};

// Generate download URL (signed URL for private access)
export const generateDownloadUrl = async (key: string, expiresIn: number = 3600): Promise<string> => {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });
    
    return await getSignedUrl(s3Client, command, { expiresIn });
  } catch (error) {
    console.error('Error generating download URL:', error);
    throw new Error('Failed to generate download URL');
  }
};

export default s3Client;