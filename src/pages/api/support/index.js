import connectToDatabase from '@/app/server/lib/mongodb';
import { sendEmail } from '@/app/server/services/sendPulseService.js';
import {
  createSupportData,
  updateSupportData,
} from '@/app/server/services/supportService.js';
import { sendTelegramMessage } from '@/app/server/services/telegramService.js';
import handleApiError from '@/app/server/utils/handleApiError.js';
import createHttpError from 'http-errors';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await connectToDatabase();

    if (!req.body) {
      throw createHttpError(400, 'Request body is missing');
    }

    const body = req.body;

    const supportData = await createSupportData(body);
    if (!supportData?._id) {
      throw createHttpError(500, 'Failed to save support data');
    }

    await sendEmail({ name: body.name, to: body.email, lang: body.locale });

    const tgResult = await sendTelegramMessage(body);
    if (!tgResult || !tgResult.ok) {
      throw createHttpError(500, 'Telegram API request failed');
    }

    const updatedData = await updateSupportData({
      id: supportData._id,
      tgResult: tgResult.result,
      status: 'Delivered',
    });

    return res.status(201).json({
      message: 'Support data created and updated successfully',
      data: updatedData,
    });
  } catch (error) {
    handleApiError(error, res);
  }
}
