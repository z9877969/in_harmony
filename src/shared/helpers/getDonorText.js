export const getDonorText = (count, locale) => {
  if (locale === 'ua') {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
      return 'донор';
    } else if (
      (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) &&
      !(lastTwoDigits >= 11 && lastTwoDigits <= 14)
    ) {
      return 'донори';
    } else {
      return 'донорів';
    }
  } else if (locale === 'en') {
    if (count === 1) {
      return 'donor';
    } else {
      return 'donors';
    }
  }
};
