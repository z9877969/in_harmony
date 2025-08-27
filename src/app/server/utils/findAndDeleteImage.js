import fs from 'node:fs/promises';
import path from 'node:path';
import { PUBLIC_IMAGES_ALL_DIR } from '../constants';

export const findAndDeleteImage = async (partialName) => {
  const files = await fs.readdir(PUBLIC_IMAGES_ALL_DIR);
  const fileToDelete = files.find((file) => file.startsWith(partialName));
  if (fileToDelete) {
    const fullPath = path.join(PUBLIC_IMAGES_ALL_DIR, fileToDelete);
    await fs.unlink(fullPath);
  }
};
