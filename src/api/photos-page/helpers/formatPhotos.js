const { formatImage } = require("../../../helpers/formatImage");

const formatPhotos = (data) => {
  return data.map((item) => {
    return formatImage(item.photo);
  });
};

module.exports = {
  formatPhotos,
};
