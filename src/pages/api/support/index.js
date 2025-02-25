import connectToDatabase from '@/app/server/lib/mongodb';
import {
  createSupportData,
  updateSupportData,
} from '@/app/server/services/supportService.js';
import { sendMessageTg } from '@/app/server/services/telegramService.js';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }

    await connectToDatabase();

    let supportData;
    try {
      supportData = await createSupportData(req.body);
      if (!supportData?._id) {
        throw new Error('Failed to save support data');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Database Error: Unable to save support form data', error);
      return res.status(500).json({
        message: 'Internal Server Error: Could not save support request.',
        details: error?.message,
      });
    }

    let tgResult;
    try {
      tgResult = await sendMessageTg(req.body);

      if (!tgResult || !tgResult?.ok) {
        throw new Error('Telegram API request failed');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Telegram Error: Failed to send message', error);
      return res.status(500).json({
        message: 'Internal Server Error: Could not send Telegram message.',
        details: error?.message,
      });
    }

    let updatedData;
    try {
      updatedData = await updateSupportData({
        id: supportData._id,
        tgResult: tgResult.data,
        status: 'Delivered',
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Database Error: Unable to update support data', error);
      return res.status(500).json({
        message: 'Internal Server Error: Could not update support request.',
        details: error?.message,
      });
    }

    return res.status(201).json({
      message: 'Support data created and updated successfully',
      supportData: updatedData,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unexpected Error:', error?.stack);
    return res.status(500).json({
      message: 'Unexpected Server Error',
      details: error?.message,
    });
  }
}
