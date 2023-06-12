const { formatImage } = require("../../../helpers/formatImage");

const formatSmallTeachersData = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
      avatar: formatImage(item.avatar),
      qualities: item.qualities?.map((item) => item.text),
    };
  });
};

module.exports = {
  formatSmallTeachersData,
};
