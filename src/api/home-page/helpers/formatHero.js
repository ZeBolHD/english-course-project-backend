const formatHero = (data) => {
  return {
    header: data.header,
    text: data.text,
    slogan: data.slogan,
  };
};

module.exports = {
  formatHero,
};
