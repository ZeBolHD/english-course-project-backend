const { formatAdvantageCards } = require("./formatAdvantageCards");
const { formatBanner } = require("./formatBanner");
const { formatHero } = require("./formatHero");
const { formatCourses } = require("./formatCourses");
const {
  formatSmallTeachersData,
} = require("../../teachers-page/helpers/formatSmallTeachersData");
const { formatQAs } = require("./formatQAs");
const { formatReviews } = require("./formatReviews");
const { formatContacts } = require("./formatContacts");
const { formatTrustedCompanies } = require("./formatTrustedCompanies");

const formatHomePageData = (data) => {
  const pathBanner = data.banner;
  const pathHero = data.hero;
  const pathAdvantageCards = data.advantage_cards;
  const pathTeachers = data.teachers;
  const pathCourses = data.courses;
  const pathReviews = data.reviews;
  const pathQAs = data.qas;
  const pathContacts = data.contacts;
  const pathTrustedCompanies = data.trusted_companies;

  return {
    banner: formatBanner(pathBanner),
    hero: formatHero(pathHero),
    advantage_cards: formatAdvantageCards(pathAdvantageCards),
    teachers: formatSmallTeachersData(pathTeachers),
    courses: formatCourses(pathCourses),
    reviews: formatReviews(pathReviews),
    qas: formatQAs(pathQAs),
    contacts: formatContacts(pathContacts),
    trusted_companies: formatTrustedCompanies(pathTrustedCompanies),
  };
};

module.exports = {
  formatHomePageData,
};
