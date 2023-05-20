"use strict";

/**
 * teachers-page controller
 */

const {
  formatSmallTeachersData,
} = require("../helpers/formatSmallTeachersData");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::teachers-page.teachers-page",
  ({ strapi }) => ({
    async find(ctx) {
      const populate = ["teachers.", "teachers.avatar"];

      const data = await strapi
        .service("api::teachers-page.teachers-page")
        .find({
          populate,
        });

      const teachersData = formatSmallTeachersData(data.teachers);

      return teachersData;
    },
  })
);
