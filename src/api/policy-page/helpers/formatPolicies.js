const formatPolicies = (data) => {
  return data.map((policy) => {
    return {
      heading: policy.heading,
      description: policy.description,
    };
  });
};

module.exports = {
  formatPolicies,
};
