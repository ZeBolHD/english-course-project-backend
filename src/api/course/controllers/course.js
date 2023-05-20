"use strict";

const { formatCourse } = require("../helpers/formatCourse");

/**
 * course controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::course.course", ({ strapi }) => ({
  //find one course

  async find(ctx) {
    const params = await this.sanitizeQuery(ctx);

    const populate = ["image"];

    const { results } = await strapi.service("api::course.course").find({
      populate,
      ...params,
    });

    const data = formatCourse(results[0]);

    console.log(data);

    return data;
  },
}));
