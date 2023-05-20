const { formatImage } = require("../../../helpers/formatImage");

const formatSmallCoursesData = (data) => {
  return data.map((item) => {
    return {
      name: item.name,
      image: formatImage(item.image),
      duration: item.duration,
      start: item.start,
      hours: item.hours,
      price: item.price,
    };
  });
};

module.exports = {
  formatSmallCoursesData,
};
