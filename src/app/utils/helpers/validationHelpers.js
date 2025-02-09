/**
 * Перевіряє, чи amount є валідним числом і більше нуля.
 * @param {number} amount
 * @returns {boolean} true, якщо amount валідний, інакше false.
 */
export const validateAmount = (amount) =>
  amount && !isNaN(amount) && amount > 0;
