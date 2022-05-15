const express = require("express");
const router = express.Router();
const httpHandler = require("../modules/district/http_handler");

router.get("/v1/district", httpHandler.getAllDistrict);
router.get("/v1/district/:id", httpHandler.getDetailDistrict);

module.exports = router;