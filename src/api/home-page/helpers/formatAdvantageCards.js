const formatAdvantageCards = (cardsData) => {
  return cardsData.map((data) => {
    return {
      name: data.name,
      descriptions: data.description.map((item) => item.text),
    };
  });
};

module.exports = {
  formatAdvantageCards,
};
