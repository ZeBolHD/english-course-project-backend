"use strict";

const { formatArticle } = require("../helpers/formatArticle");
const { formatNews } = require("../helpers/formatNews");

/**
 * article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async find(ctx) {
    const populate = ["image"];
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);

    if (!Object.keys(sanitizedQueryParams).length) {
      const fields = ["slug"];

      const { results } = await strapi
        .service("api::article.article")
        .find({ populate, sort: { createdAt: "desc" } });

      const data = formatNews(results);

      return data;
    }

    if (sanitizedQueryParams.filters) {
      let data = await strapi
        .service("api::article.article")
        .find({ populate, ...sanitizedQueryParams });

      data = formatArticle(data.results[0]);

      return data;
    }

    if (sanitizedQueryParams.pagination?.page < 1) {
      return null;
    }

    const paginationQuery = {
      pageSize: 5 && sanitizedQueryParams.pagination.pageSize,
      page: 1 && sanitizedQueryParams.pagination.page,
    };

    let { results, pagination } = await strapi
      .service("api::article.article")
      .find({
        populate,
        pagination: { ...paginationQuery },
        sort: { createdAt: "desc" },
      });

    if (!results.length) {
      return null;
    }

    const data = formatNews(results);

    return {
      news: data,
      pagination,
    };
  },
}));
