import { SENDPULSE_CONFIG } from '@/shared/constants/index.js'
import createHttpError from 'http-errors'
import { EMAIL_TEMPLATES } from '../templates/email/index.js'

const getSendPulseToken = async () => {
  try {
    const response = await fetch(SENDPULSE_CONFIG.URL_ACCESS_TOKEN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: SENDPULSE_CONFIG.CLIENT_ID,
        client_secret: SENDPULSE_CONFIG.CLIENT_SECRET,
      }),
    });

    const data = await response.json();
    if (!data.access_token) {
      throw createHttpError(500, 'Не вдалося отримати токен SendPulse');
    }
    return data.access_token;
  } catch (error) {
    throw createHttpError(500, 'SendPulse API error');
  }
};

export const sendEmail = async ({ name, to, lang = 'ua' }) => {
  try {
    const token = await getSendPulseToken();
    const template = EMAIL_TEMPLATES[lang];
    if (!template) {
      throw createHttpError(400, 'Невідома мова email');
    }

    const emailContent = template.template(name);
    const emailData = {
      email: {
        subject: template.subject,
        from: {
          name: SENDPULSE_CONFIG.SENDER_NAME,
          email: SENDPULSE_CONFIG.SENDER_EMAIL,
        },
        to: [{ name, email: to }],
        html: emailContent.html,
        text: emailContent.text,
      },
    };

    const response = await fetch(SENDPULSE_CONFIG.URL_SMTP_EMAIL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw createHttpError(
        500,
        `SendPulse error: ${response.status} ${response.statusText}`
      );
    }

    return { success: true };
  } catch (error) {
    throw createHttpError(500, 'Не вдалося надіслати email');
  }
};
