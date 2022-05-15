const express = require("express");
const router = express.Router();
const httpHandler = require("../modules/village/http_handler");

router.get("/v1/district/:districtId/sub-district/:subDistrictId/village", httpHandler.getAllVillageByDistrict);
router.get("/v1/district/:districtId/sub-district/:subDistrictId/village/:villageId", httpHandler.getDetailVillage);

module.exports = router;