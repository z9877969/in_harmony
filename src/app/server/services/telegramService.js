import { TELEGRAM_CONFIG } from '@/shared/constants/index.js';
import { TELEGRAM_TEMPLATES } from '../templates/telegram/index.js';

const { TOKEN, CHAT_ID, TIMEOUT_S } = TELEGRAM_CONFIG;

export const sendMessageTg = async (data) => {
  try {
    const { name, email, message, locale } = data;

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
      throw new Error(
        `Telegram API error: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error sending Telegram message:', error);
    throw error;
  }
};
