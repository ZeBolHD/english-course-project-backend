"use strict";

const { formatNews } = require("../helpers/formatNews");

/**
 * news-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::news-page.news-page",
  ({ strapi }) => ({
    async find(ctx) {
      const populate = ["articles.image"];
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      if (sanitizedQueryParams.pagination.page < 1) {
        return null;
      }

      const paginationQuery = {
        pageSize: 5 && sanitizedQueryParams.pagination.pageSize,
        page: sanitizedQueryParams.pagination.page,
      };

      let data = await strapi.service("api::news-page.news-page").find({
        populate,
        pagination: { ...paginationQuery },
      });

      console.log(data);

      if (!results.length) {
        return null;
      }

      data = formatNews(results);

      return {
        data,
        pagination,
      };
    },
  })
);
