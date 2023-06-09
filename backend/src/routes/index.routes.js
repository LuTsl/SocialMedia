const express = require("express");
const router = require("./user.routes.js");
const routerAdmin = require("./auth.routes.js");
const routerPosts = require("./post.routes.js");
const routerComments = require("./comments.routes.js");

const routes = (app) => {
  app.use(
    "/api/v1",
    express.urlencoded({ extended: false }),
    router,
    routerPosts,
    routerComments
  );
  app.use("/auth/v2", express.urlencoded({ extended: false }), routerAdmin);
};

module.exports = routes;
