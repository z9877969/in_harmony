import connectToDatabase from '@/app/server/lib/mongodb';
import {
  createSupportData,
  updateSupportData,
} from '@/app/server/services/supportService.js';
import { sendMessageTg } from '@/app/server/services/telegramService.js';
import handleApiError from '@/app/server/utils/handleApiError.js';
import createHttpError from 'http-errors';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }

    await connectToDatabase();

    if (!req.body) {
      throw createHttpError(400, 'Request body is missing');
    }

    let supportData;
    const body = req.body;

    try {
      supportData = await createSupportData(body);
      if (!supportData?._id) {
        throw createHttpError(500, 'Failed to save support data');
      }
    } catch (error) {
      handleApiError(error, res);
    }

    let tgResult;
    try {
      tgResult = await sendMessageTg(body);

      if (!tgResult || !tgResult?.ok) {
        throw createHttpError(500, 'Telegram API request failed');
      }
    } catch (error) {
      handleApiError(error, res);
    }

    let updatedData;
    try {
      updatedData = await updateSupportData({
        id: supportData._id,
        tgResult: tgResult.result,
        status: 'Delivered',
      });
    } catch (error) {
      handleApiError(error, res);
    }

    return res.status(201).json({
      message: 'Support data created and updated successfully',
      data: updatedData,
    });
  } catch (error) {
    handleApiError(error, res);
  }
}
