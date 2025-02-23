import { donorsDict } from '../constants';
export const getDonorText = (count, locale) => {
  if (locale === 'ua') {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
      return donorsDict.ua[1];
    } else if (
      (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) &&
      !(lastTwoDigits >= 11 && lastTwoDigits <= 14)
    ) {
      return donorsDict.ua[2];
    } else {
      return donorsDict.ua[3];
    }
  } else if (locale === 'en') {
    if (count === 1) {
      return donorsDict.en[1];
    } else {
      return donorsDict.en[2];
    }
  }
};
