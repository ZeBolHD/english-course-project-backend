const { formatAdvantageCards } = require("./formatAdvantageCards");
const { formatBanner } = require("./formatBanner");
const { formatHero } = require("./formatHero");
const {
  formatSmallTeachersData,
} = require("../../teachers-page/helpers/formatSmallTeachersData");

const formatHomePageData = (data) => {
  const pathBanner = data.banner;
  const pathHero = data.hero;
  const pathAdvantageCards = data.advantage_cards;
  const pathTeachers = data.teachers;

  return {
    banner: formatBanner(pathBanner),
    hero: formatHero(pathHero),
    advantage_cards: formatAdvantageCards(pathAdvantageCards),
    teachers: formatSmallTeachersData(pathTeachers),
  };
};

module.exports = {
  formatHomePageData,
};
