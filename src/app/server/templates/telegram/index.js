export const TELEGRAM_TEMPLATES = {
  newRequest: {
    ua: {
      template: (name, email, message) => ({
        html: `
				<b>📩 Нова заявка!</b>
				<b>Ім'я:</b> ${name}
				<b>Email:</b> ${email}
				<b>Повідомлення:</b> "${message}"
			`,
        text: `📩 Нова заявка!\n Ім'я: ${name}\n Email: ${email}\n Повідомлення: "${message}."`,
      }),
    },
    en: {
      template: (name, email, message) => ({
        html: `
				<b>📩 New Request!</b>
				<b>Name:</b> ${name}
				<b>Email:</b> ${email}
				<b>Message:</b> "${message}"
			`,
        text: `📩 New Request!\n Name: ${name}\n Email: ${email}\n Message: "${message}."`,
      }),
    },
  },
};
