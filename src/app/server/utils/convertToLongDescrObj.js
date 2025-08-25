export const convertToLongDescrObj = (longDescrArr = []) => {
  return longDescrArr.reduce((acc, el, idx) => {
    acc['section' + (idx + 1)] = el;
    return acc;
  }, {});
};
