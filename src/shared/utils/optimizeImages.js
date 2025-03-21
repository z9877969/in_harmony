/**
 * Скрипт для оптимізації зображень
 *
 * Запуск:
 *    node src/shared/utils/optimizeImages.js
 *
 * Вхідні зображення: images/original
 * Оптимізовані зображення: images/optimized
 *
 * Підтримувані формати: JPG, PNG, WebP
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../../../images/original');
const outputDir = path.join(__dirname, '../../../images/optimized');

async function optimizeImages() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const inputFile = path.join(inputDir, file);
    const outputFile = path.join(outputDir, file);

    if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) {
      console.log(`Пропущено: ${file} (не зображення)`);
      continue;
    }

    try {
      if (/\.(jpg|jpeg)$/i.test(file)) {
        await sharp(inputFile).jpeg({ quality: 75 }).toFile(outputFile);
      } else if (/\.png$/i.test(file)) {
        await sharp(inputFile).png({ quality: 80 }).toFile(outputFile);
      } else if (/\.webp$/i.test(file)) {
        await sharp(inputFile).webp({ quality: 75 }).toFile(outputFile);
      }

      console.log(`✅ Опрацьовано: ${file}`);
    } catch (error) {
      console.error(`❌ Помилка обробки ${file}:`, error);
    }
  }

  console.log('✅ Усі зображення оброблені!');
}

optimizeImages();
