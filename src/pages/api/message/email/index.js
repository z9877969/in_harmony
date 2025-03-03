import { sendEmail } from '@/app/server/services/sendPulseService.js';
import handleApiError from '@/app/server/utils/handleApiError.js';
import createHttpError from 'http-errors';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      throw createHttpError(405, 'Метод не дозволено');
    }

    const { name, email, lang } = req.body;
    if (!name || !email) {
      throw createHttpError(400, "Обов'язкові поля не передані");
    }

    await sendEmail({ name, to: email, lang });

    return res.status(200).json({ message: 'Email успішно надіслано' });
  } catch (error) {
    handleApiError(res, error);
  }
}
