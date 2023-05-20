const { formatImage } = require("../../../helpers/formatImage");

const formatCourse = (data) => {
  return {
    name: data.name,
    slug: data.slug,
    image: formatImage(data.image),
    hours: data.hours,
    price: data.price,
    start: data.start,
    duration: data.duration,
    description: data.description,
  };
};

module.exports = {
  formatCourse,
};
