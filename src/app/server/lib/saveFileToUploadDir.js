import fs from 'node:fs/promises';
import path from 'node:path';
import { APP_DOMAIN, PUBLIC_IMAGES_ALL_DIR } from '../constants';
import { clearTempDir } from '../utils';

const saveFileToUploadDir = async (file, instanceId) => {
  try {
    const newFileName = instanceId
      ? String(instanceId) + '_' + file.filename
      : file.filename;

    const uploadPath = path.join(PUBLIC_IMAGES_ALL_DIR, newFileName);

    await fs.rename(file.path, uploadPath);
    await clearTempDir();

    return {
      url: `${APP_DOMAIN}/images/all/${newFileName}`,
      path: newFileName,
    };
  } catch (error) {
    await fs.unlink(file.path);
  }
};

export default saveFileToUploadDir;
