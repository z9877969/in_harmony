export const getShareOptions = (w) => {
  const sharingUrl =
    process.env.NODE_ENV === 'production'
      ? encodeURIComponent(w.location.href)
      : 'https://inharmony.com.ua/ua/collection/active/67ade06675332cf0a1061fea';

  return {
    telegram: {
      url: `https://t.me/share/url?url=${sharingUrl}`,
    },
    instagram: {
      url: `https://www.instagram.com/stories/create/?backgroundImageUrl=${sharingUrl}`,
    },
    facebook: {
      url: `https://www.facebook.com/sharer/sharer.php?u=${sharingUrl}`,
    },
  };
};
