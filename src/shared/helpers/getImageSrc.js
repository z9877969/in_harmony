export const getImageSrc = (fileName) => {
  return fileName.path ? '/images/all/' + fileName.path : '';
};
