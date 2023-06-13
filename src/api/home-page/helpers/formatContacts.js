const formatContacts = (data) => {
  return data.map((contact) => {
    return {
      name: contact.name,
      link: contact.link,
    };
  });
};

module.exports = {
  formatContacts,
};
