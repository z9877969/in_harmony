export const TELEGRAM_TEMPLATES = {
  newRequest: {
    ua: {
      template: (name, email, message) => ({
        html: `
				<b>📩 Нова заявка!</b>\n
				<b>Ім'я:</b> ${name}\n
				<b>Email:</b> ${email}\n
				<b>Повідомлення:</b> "${message}"
			`,
        text: `📩 Нова заявка!\n Ім'я: ${name}\n Email: ${email}\n Повідомлення: "${message}."`,
      }),
    },
    en: {
      template: (name, email, message) => ({
        html: `
				<b>📩 New Request!</b>\n
				<b>Name:</b> ${name}\n
				<b>Email:</b> ${email}\n
				<b>Message:</b> "${message}"
			`,
        text: `📩 New Request!\n Name: ${name}\n Email: ${email}\n Message: "${message}."`,
      }),
    },
  },
};
