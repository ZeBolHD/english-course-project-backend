'use strict';

/**
 * photo-archive service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::photo-archive.photo-archive');
