const { formatImage } = require("../../../helpers/formatImage");

const formatAchievements = (data) => {
  return data.map((item) => {
    return {
      name: item.name,
      image: formatImage(item.image),
    };
  });
};

module.exports = {
  formatAchievements,
};
