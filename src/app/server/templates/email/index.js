export const EMAIL_TEMPLATES = {
  ua: {
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
