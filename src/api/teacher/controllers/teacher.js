"use strict";

/**
 * teacher controller
 */

const { formatTeacher } = require("../helpers/formatTeacher");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::teacher.teacher", ({ strapi }) => ({
  //find one teacher

  async find(ctx) {
    const params = await this.sanitizeQuery(ctx);

    const populate = ["avatar", "achievements.", "achievements.image"];

    const { results } = await strapi
      .service("api::teacher.teacher")
      .find({ ...params, populate });

    const teacher = formatTeacher(results[0]);

    return teacher;
  },
}));
