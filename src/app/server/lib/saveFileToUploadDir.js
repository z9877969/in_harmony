import fs from 'node:fs/promises';
import path from 'node:path';
import env from '../utils/evn.js';

export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');

const saveFileToUploadDir = async (file) => {
  const tempPath = path.join(TEMP_UPLOAD_DIR, file.filename);
  const uploadPath = path.join(UPLOAD_DIR, file.filename);

  console.log('Temp Path:', tempPath);
  console.log('Upload Path:', uploadPath);

  await fs.rename(tempPath, uploadPath);

  return `${env('APP_DOMAIN')}/uploads/${file.filename}`;
};

export default saveFileToUploadDir;
