const express = require('express');
const productsRoute = require('./products.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/products',
    route: productsRoute,
  },
];

const devRoutes = [];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
