const { SUCCESS, ERROR } = require("../../helpers/http-status");
const query = require("./query");
const logger = require("../../helpers/utils/logger");

class Village {
    constructor() {
        this.ctx = "Village";
    };

    async getAllVillageByDistrict(districtId, subDistrictId) {
        const ctx = `${this.ctx}.getAllVillageByDistrict`;

        const result = await query.getSpecificVillage(districtId, subDistrictId);
        if (result.error) {
            logger.log(ctx, result.message, "query.getSpecificVillage()");
            return new ERROR.INTERNAL_SERVER_ERROR();
        };

        if (result.data.length < 1) {
            logger.log(ctx, result.message, "query.getSpecificVillage()");
            return new ERROR.NOT_FOUND(null, "Village not found");
        };
        return new SUCCESS.OK(result.data);
    }

    async getDetailVillage(districtId, subDistrictId, villageId) {
        const ctx = `${this.ctx}.getDetailVillage`;

        const result = await query.getOneSpecificVillage(districtId, subDistrictId, villageId);
        if (result.error) {
            logger.log(ctx, result.message, "query.getOneSpecificVillage()");
            return new ERROR.INTERNAL_SERVER_ERROR();
        };

        if (!result.data) {
            logger.log(ctx, result.message, "query.getOneSpecificVillage()");
            return new ERROR.NOT_FOUND(null, "Village not found");
        };
        return new SUCCESS.OK(result.data);
    }
};

module.exports = Village;