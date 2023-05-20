const { formatImage } = require("../../../helpers/formatImage");

const formatSmallTeachersData = (data) => {
  // console.log(data);
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
      avatar: formatImage(item.avatar),
    };
  });
};

module.exports = {
  formatSmallTeachersData,
};
