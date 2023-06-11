const { formatAdvantageCards } = require("./formatAdvantageCards");
const { formatBanner } = require("./formatBanner");
const { formatHero } = require("./formatHero");
const { formatCourses } = require("./formatCourses");
const {
  formatSmallTeachersData,
} = require("../../teachers-page/helpers/formatSmallTeachersData");
const { formatQAs } = require("./formatQAs");
const { formatReviews } = require("./formatReviews");

const formatHomePageData = (data) => {
  const pathBanner = data.banner;
  const pathHero = data.hero;
  const pathAdvantageCards = data.advantage_cards;
  const pathTeachers = data.teachers;
  const pathCourses = data.courses;
  const pathReviews = data.reviews;
  const pathQAs = data.qas;

  return {
    banner: formatBanner(pathBanner),
    hero: formatHero(pathHero),
    advantage_cards: formatAdvantageCards(pathAdvantageCards),
    teachers: formatSmallTeachersData(pathTeachers),
    course_cards: formatCourses(pathCourses),
    reviews: formatReviews(pathReviews),
    qas: formatQAs(pathQAs),
  };
};

module.exports = {
  formatHomePageData,
};
