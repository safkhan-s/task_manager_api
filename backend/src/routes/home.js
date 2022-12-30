const express = require("express");

const { homePage } = require("../controllers/home-page");

const router = express.Router();

router.route("/").get(homePage);

module.exports = router;
