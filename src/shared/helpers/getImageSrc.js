export const getImageSrc = (imageData) => {
  return imageData.path ? '/images/all/' + imageData.path : '';
};
