const formatSmallImage = (image) => {
  return {
    alternativeText: image.alternativeText,
    url: image.url,
  };
};

module.exports = {
  formatSmallImage,
};
