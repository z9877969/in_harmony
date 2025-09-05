import fs from 'node:fs/promises';
import path from 'node:path';
import { TEMP_UPLOAD_DIR } from '@/app/server/constants';

export const clearTempDir = async (TEMP_DIR_PATH = TEMP_UPLOAD_DIR) => {
  try {
    // Перевіряємо чи існує директорія
    await fs.access(TEMP_DIR_PATH);

    const files = await fs.readdir(TEMP_DIR_PATH);
    const filesToDelete = files.filter((file) => file !== '.gitkeep');

    if (!filesToDelete.length) return;

    const deletePromises = filesToDelete.map(async (file) => {
      const filePath = path.join(TEMP_DIR_PATH, file);
      await fs.unlink(filePath);
    });
    await Promise.all(deletePromises);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // eslint-disable-next-line no-console
      console.log('Тимчасова директорія не існує');
    } else {
      // eslint-disable-next-line no-console
      console.error(
        'Помилка при очищенні тимчасової директорії:',
        error.message
      );
    }
  }
};
