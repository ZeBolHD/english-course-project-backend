const { formatImage } = require("../../../helpers/formatImage");

const formatCourses = (data) => {
  return data.map((course) => {
    return {
      name: course.name,
      slug: course.slug,
      duration: course.duration,
      start: course.start,
      hours: course.hours,
      price: course.price,
      price_taxless: course.price_taxless,
      language_levels: course.language_levels.map((level) => level.level),
      intensity: course.intensity,
      persons: course.persons,
    };
  });
};

module.exports = {
  formatCourses,
};
