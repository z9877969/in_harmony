import { sendTelegramMessage } from '@/app/server/services/telegramService.js';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      return sendTelegramMessage(req, res);
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    handleApiError(res, error);
  }
}
