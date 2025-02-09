/**
 * Генерує контрольний рядок для підпису.
 * @param {object} params Об'єкт з параметрами.
 * @returns {string} Сформований контрольний рядок.
 */
export const generateControlString = ({
  merchant,
  merchantDomain,
  orderId,
  ts,
  amount,
  currency,
  description,
  qnt,
}) =>
  `${merchant};${merchantDomain};${orderId};${ts};${amount};${currency};${description};${qnt};${amount}`;
