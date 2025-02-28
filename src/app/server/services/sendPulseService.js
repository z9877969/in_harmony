import handleApiError from '@/utils/handleApiError';
import createHttpError from 'http-errors';

export const EMAIL_TEMPLATES = {
  uk: {
    subject: 'Дякуємо за ваше звернення!',
    template: (name) => ({
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2>Вітаємо, ${name}!</h2>
          <p>Дякуємо за ваше звернення. Ми отримали ваше повідомлення та зв'яжемося з вами найближчим часом.</p>
          <p>З найкращими побажаннями,<br>Команда In Harmony</p>
        </div>
      `,
      text: `Вітаємо, ${name}!\n\nДякуємо за ваше звернення. Ми отримали ваше повідомлення та зв'яжемося з вами найближчим часом.\n\nЗ найкращими побажаннями,\nКоманда In Harmony`,
    }),
  },
  en: {
    subject: 'Thank you for your inquiry!',
    template: (name) => ({
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2>Hello, ${name}!</h2>
          <p>Thank you for reaching out to us. We have received your message and will contact you soon.</p>
          <p>Best regards,<br>In Harmony Team</p>
        </div>
      `,
      text: `Hello, ${name}!\n\nThank you for reaching out to us. We have received your message and will contact you soon.\n\nBest regards,\nIn Harmony Team`,
    }),
  },
};

const getSendPulseToken = async () => {
  try {
    const response = await fetch(
      'https://api.sendpulse.com/oauth/access_token',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: process.env.SENDPULSE_CLIENT_ID,
          client_secret: process.env.SENDPULSE_CLIENT_SECRET,
        }),
      }
    );

    const data = await response.json();
    if (!data.access_token) {
      throw createHttpError(500, 'Не вдалося отримати токен SendPulse');
    }
    return data.access_token;
  } catch (error) {
    throw createHttpError(500, 'SendPulse API error');
  }
};

const sendEmail = async ({ name, to, lang = 'uk' }) => {
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
          name: process.env.SENDPULSE_SENDER_NAME,
          email: process.env.SENDPULSE_SENDER_EMAIL,
        },
        to: [{ name, email: to }],
        html: emailContent.html,
        text: emailContent.text,
      },
    };

    const response = await fetch('https://api.sendpulse.com/smtp/emails', {
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
