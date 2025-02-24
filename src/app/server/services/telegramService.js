import { initServerI18n } from '@/i18n/utils/serverI18n.js';
import { TELEGRAM_CONFIG } from '@/shared/constants/index.js';

const { TOKEN, CHAT_ID } = TELEGRAM_CONFIG;

export const sendMessageTg = async (data) => {
  try {
    const { name, email, message, locale } = data;
    const { t } = await initServerI18n(locale, ['footer']);

    const tgMessage = t('contactUs.tgMessage', { name, email, message });

    const response = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
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
    console.error('Error sending Telegram message:', error);
    throw error;
  }
};
