/**
 * Генерує Unix timestamp (кількість секунд від 1970-01-01).
 * @returns {number} Часовий штамп.
 */
export const generateTimestamp = () => Math.floor(Date.now() / 1000);

/**
 * Повертає дату наступного місяця у форматі "dd.mm.yyyy".
 * @returns {string} Форматована дата наступного місяця.
 */
export const getNextMonthDateFormatted = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};
