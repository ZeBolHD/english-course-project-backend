const { formatImage } = require("../../../helpers/formatImage");

const formatBanner = (data) => {
  return {
    text: data.text,
  };
};

module.exports = {
  formatBanner,
};
