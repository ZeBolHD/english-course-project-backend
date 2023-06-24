"use strict";

const { formatPolicies } = require("../helpers/formatPolicies");

/**
 * policy-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::policy-page.policy-page",
  ({ strapi }) => ({
    async find(ctx) {
      const populate = ["policies."];

      const data = await strapi
        .service("api::policy-page.policy-page")
        .find({ populate });

      const policies = formatPolicies(data.policies);

      return policies;
    },
  })
);
