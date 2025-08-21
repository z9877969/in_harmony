export const calcCookiesMaxAge = (period = '') => {
  const timeDefinder = period.slice(-1);
  const timeValue = Number.parseFloat(period);

  switch (timeDefinder) {
    case 'm':
      return timeValue * 60;
    case 'h':
      return timeValue * 60 * 60;
    case 'd':
      return timeValue * 24 * 60 * 60;
    default:
      return timeValue;
  }
};
