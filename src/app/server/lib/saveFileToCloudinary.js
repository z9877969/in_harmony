import fs from 'node:fs/promises';
import cloudinary from 'cloudinary';
import  env  from '../utils/evn.js';

cloudinary.v2.config({
  cloud_name: env('CLOUD_NAME'),
  api_key: env('API_KEY'),
  api_secret: env('API_SECRET'),
  secure: true,
});

export const saveFileToCloudinary = async (file) => {
  try {
    const response = await cloudinary.uploader.upload(file.path, {
      folder: 'in_harmony_uploads',
    });
    console.log(response);
    await fs.unlink(file.path);
    return response.secure_url;
  } catch (error) {
    console.error('Помилка завантаження файлу:', error);
    throw new Error('Не вдалося завантажити файл');
  }
};

// cloudinary.uploader.upload(
//   '../../temp/light-desktop@2x.png',
//   (error, result) => {
//     if (error) console.error('Помилка:', error);
//     else console.log('Результат:', result);
//   }
// );
