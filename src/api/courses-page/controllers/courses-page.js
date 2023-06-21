"use strict";

const { formatCourses } = require("../helpers/formatCourses");

/**
 * courses-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::courses-page.courses-page",
  ({ strapi }) => ({
    async find(ctx) {
      const populate = ["courses.", "courses.image", "courses.language_levels"];

      const data = await strapi.service("api::courses-page.courses-page").find({
        populate,
      });

      const courses = formatCourses(data.courses);

      return courses;
    },
  })
);
