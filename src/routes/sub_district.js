const express = require("express");
const router = express.Router();
const httpHandler = require("../modules/sub-district/http_handler");

router.get("/v1/district/:id/sub-district", httpHandler.getAllSubDistrict);
router.get("/v1/district/:districtId/sub-district/:subDistrictId", httpHandler.getDetailSubDistrict);

module.exports = router;