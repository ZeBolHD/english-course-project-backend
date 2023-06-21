const { formatImage } = require("../../../helpers/formatImage");
const { formatAchievements } = require("./formatAchievement");

const formatTeacher = (data) => {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    slug: data.slug,
    avatar: formatImage(data.avatar),
    achievements: formatAchievements(data.achievements),
  };
};

module.exports = {
  formatTeacher,
};
