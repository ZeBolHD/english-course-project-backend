const formatQAs = (data) => {
  return data.map((qa) => {
    return {
      question: qa.question,
      answer: qa.answer,
    };
  });
};

module.exports = {
  formatQAs,
};
