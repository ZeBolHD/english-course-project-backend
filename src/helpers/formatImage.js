const formatImage = (data) => {
  return {
    alternativeText: data.alternativeText,
    url: data.url,
    sizes: {
      small: data.formats.small.url,
      medium: data.formats.medium.url,
      large: data.formats.large.url,
    },
  };
};

module.exports = {
  formatImage,
};
