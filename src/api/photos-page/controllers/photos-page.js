"use strict";

const { formatPhotos } = require("../helpers/formatPhotos");

/**
 * photos-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::photos-page.photos-page",
  ({ strapi }) => ({
    async find(ctx) {
      const populate = ["photos.", "photos.photo"];

      const data = await strapi
        .service("api::photos-page.photos-page")
        .find({ populate });

      const photos = formatPhotos(data.photos);

      return photos;
    },
  })
);
