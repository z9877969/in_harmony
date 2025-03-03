import { TELEGRAM_CONFIG } from '@/shared/constants/index.js';
import createHttpError from 'http-errors';
import { TELEGRAM_TEMPLATES } from '../templates/telegram/index.js';

const { TOKEN, CHAT_ID, TIMEOUT_S } = TELEGRAM_CONFIG;

export const sendTelegramMessage = async (data) => {
  const { name, email, message, locale } = data;

  if (!name || !email || !message || !locale) {
    throw createHttpError(
      400,
      'Required fields are not provided in telegramService'
    );
  }

  const tgMessageTemplate = TELEGRAM_TEMPLATES.newRequest[locale].template(
    name,
    email,
    message
  );
  const { html: tgMessage } = tgMessageTemplate;

  const response = await fetch(
    `https://api.telegram.org/bot${TOKEN}/sendMessage?timeout=${TIMEOUT_S}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: tgMessage,
      }),
    }
  );

  if (!response.ok) {
    throw createHttpError(
      response.status,
      `Telegram API error: ${response.statusText}`
    );
  }

  const result = await response.json();
  return result;
};
