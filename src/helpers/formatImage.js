const formatImage = (data) => {
  return {
    alternativeText: data.alternativeText,
    url: data.url,
    size: {
      width: data.width,
      height: data.height,
    },
  };
};

module.exports = {
  formatImage,
};
