// Email шаблоны
const EMAIL_TEMPLATES = {
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

// Получение токена SendPulse
function getSendPulseToken() {
  // Logger.log("Получение токена SendPulse");
  const response = UrlFetchApp.fetch(
    'https://api.sendpulse.com/oauth/access_token',
    {
      method: 'post',
      payload: {
        grant_type: 'client_credentials',
        client_id: CONFIG.sendpulse.credentials.clientId,
        client_secret: CONFIG.sendpulse.credentials.clientSecret,
      },
      muteHttpExceptions: true,
    }
  );

  const data = JSON.parse(response.getContentText());
  if (!data.access_token) {
    throw new Error('Не удалось получить токен SendPulse');
  }

  return data.access_token;
}

// Отправка email
function sendEmail(params) {
  try {
    Logger.log('Начало отправки email');
    const token = getSendPulseToken();
    const lang = params.lang || 'uk';
    const template = EMAIL_TEMPLATES[lang];
    const emailContent = template.template(params.name);

    const emailData = {
      email: {
        subject: template.subject,
        from: {
          name: CONFIG.sendpulse.sender.name,
          email: CONFIG.sendpulse.sender.email,
        },
        to: [
          {
            name: params.name,
            email: params.to,
          },
        ],
        html: emailContent.html,
        text: emailContent.text,
      },
    };

    const response = UrlFetchApp.fetch(
      'https://api.sendpulse.com/smtp/emails',
      {
        method: 'post',
        contentType: 'application/json',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        payload: JSON.stringify(emailData),
        muteHttpExceptions: true,
      }
    );

    const responseCode = response.getResponseCode();
    Logger.log('SendPulse ответ: ' + response.getContentText());

    return responseCode === 200;
  } catch (error) {
    Logger.log('Ошибка отправки email: ' + error.toString());
    return false;
  }
}
