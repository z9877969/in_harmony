import { sendMessageTg } from '@/app/server/services/telegramService.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return sendMessageTg(req, res);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
