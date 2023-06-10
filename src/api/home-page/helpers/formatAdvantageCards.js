const formatAdvantageCards = (data) => {
  return data.map((card) => {
    return {
      name: card.name,
      items: card.items.map((item) => item.text),
    };
  });
};

module.exports = {
  formatAdvantageCards,
};
