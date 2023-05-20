const { formatImage } = require("../../../helpers/formatImage");

const formatBanner = (data) => {
  return {
    text: data.text,
    image: formatImage(data.image),
  };
};

module.exports = {
  formatBanner,
};
