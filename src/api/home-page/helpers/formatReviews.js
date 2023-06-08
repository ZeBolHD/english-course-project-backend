const formatReviews = (data) => {
  return data.map((item) => {
    return {
      name: item.name,
      text: item.text,
    };
  });
};

module.exports = {
  formatReviews,
};
