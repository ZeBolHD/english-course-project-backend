const { formatImage } = require("../../../helpers/formatImage");

const formatArticle = (data) => {
  return {
    heading: data.heading,
    slug: data.slug,
    image: data.image && formatImage(data.image),
    description: data.description,
    createdAt: data.createdAt,
  };
};

module.exports = {
  formatArticle,
};
