"use strict";

/**
 * teacher controller
 */

const { formatTeacherData } = require("../helpers/formatTeacherData");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::teacher.teacher", ({ strapi }) => ({
  async find(ctx) {
    // const { data } = await super.find(ctx, {
    //   populate: ["avatar", "achievements", "achievements.photo"],
    // });
    const params = await this.sanitizeQuery(ctx);

    const populate = ["avatar", "achievements.", "achievements.image"];

    const { results } = await strapi
      .service("api::teacher.teacher")
      .find({ ...params, populate });
    console.log(results);

    const data = formatTeacherData(results[0]);

    return data;
  },
  // async findOne(ctx) {
  //   const params = await this.sanitizeQuery(ctx);
  //   console.log(params);
  //   const populate = ["avatar", "achievements.", "achievements.photo"];
  //   const results = await strapi
  //     .service("api::teacher.teacher")
  //     .find({ params });
  //   return results;
  // },
}));
