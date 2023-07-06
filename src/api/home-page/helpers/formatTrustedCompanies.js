const { formatImage } = require("../../../helpers/formatImage");

const formatTrustedCompanies = (data) => {
  return data.map((company) => {
    return formatImage(company.image);
  });
};

module.exports = {
  formatTrustedCompanies,
};
