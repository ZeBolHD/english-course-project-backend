const { formatArticle } = require("./formatArticle");

const formatNews = (data) => {
  return data.map((article) => {
    return formatArticle(article);
  });
};

module.exports = {
  formatNews,
};
