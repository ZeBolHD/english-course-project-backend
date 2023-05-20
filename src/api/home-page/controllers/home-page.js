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
        "banner.image",
        "advantage_cards.",
        "advantage_cards.description",
        "hero.",
        "courses.",
        "teachers.",
        "teachers.avatar",
      ];

      let data = await strapi
        .service("api::home-page.home-page")
        .find({ populate });

      data = formatHomePageData(data);

      return data;
    },
  })
);
