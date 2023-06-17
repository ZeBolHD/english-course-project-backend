"use strict";

/**
 * home-page controller
 */
const { formatHomePageData } = require("../helpers/formatHomePageData");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::home-page.home-page",
  ({ strapi }) => ({
    async find(ctx) {
      const populate = [
        "banner.",
        "advantage_cards.",
        "advantage_cards.items",
        "hero.",
        "courses.",
        "courses.image",
        "courses.language_levels",
        "qas",
        "teachers.",
        "teachers.avatar",
        "teachers.qualities",
        "reviews",
        "contacts",
        "trusted_companies",
        "trusted_companies.image",
      ];

      let data = await strapi
        .service("api::home-page.home-page")
        .find({ populate });

      data = formatHomePageData(data);

      return data;
    },
  })
);
