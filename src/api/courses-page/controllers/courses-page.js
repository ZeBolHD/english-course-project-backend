"use strict";

const { formatSmallCoursesData } = require("../helpers/formatSmallCoursesData");

/**
 * courses-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::courses-page.courses-page",
  ({ strapi }) => ({
    async find(ctx) {
      const populate = ["image"];

      const { results } = await strapi.service("api::course.course").find({
        populate,
      });

      const data = formatSmallCoursesData(results);

      return data;
    },
  })
);
