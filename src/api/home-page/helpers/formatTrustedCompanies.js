const { formatSmallImage } = require("../../../helpers/formatSmallImage");

const formatTrustedCompanies = (data) => {
  return data.map((company) => {
    return formatSmallImage(company.image);
  });
};

module.exports = {
  formatTrustedCompanies,
};
