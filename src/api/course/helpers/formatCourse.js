const { formatImage } = require("../../../helpers/formatImage");

const formatCourse = (data) => {
  return {
    name: data.name,
    slug: data.slug,
    image: data.image && formatImage(data.image),
    duration: data.duration,
    start: data.start,
    hours: data.hours,
    price: data.price,
    price_taxless: data.price_taxless,
    language_levels: data.language_levels.map((level) => level.text),
    intensity: data.intensity,
    persons: data.persons,
    books: data.books.map((item) => item.name),
    description: data.description,
  };
};

module.exports = {
  formatCourse,
};
