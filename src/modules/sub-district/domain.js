const { SUCCESS, ERROR } = require("../../helpers/http-status");
const query = require("./query");
const logger = require("../../helpers/utils/logger");

class SubDistrict {
    constructor() {
        this.ctx = "SubDistrict";
    };

    async getAllSubDistrict(id) {
        const ctx = `${this.ctx}.getAllSubDistrict`;

        const result = await query.getAllSubDistrict(id);
        if (result.error) {
            logger.log(ctx, result.message, "query.getAllSubDistrict()");
            return new ERROR.INTERNAL_SERVER_ERROR();
        };

        if (result.data.length < 1) {
            logger.log(ctx, result.message, "query.getAllSubDistrict()");
            return new ERROR.NOT_FOUND(null, "Sub-district not found");
        };
        return new SUCCESS.OK(result.data);
    };

    async getDetailSubDistrict(districtId, subDistrictId) {
        const ctx = `${this.ctx}.getDetailSubDistrict`;

        const result = await query.getDetailSubDistrict(districtId, subDistrictId);
        if (result.error) {
            logger.log(ctx, result.message, "query.getDetailSubDistrict()");
            return new ERROR.INTERNAL_SERVER_ERROR();
        };

        if (!result.data) {
            logger.log(ctx, result.message, "query.getDetailSubDistrict()");
            return new ERROR.NOT_FOUND(null, "Sub-district not found");
        };
        return new SUCCESS.OK(result.data);
    };


};

module.exports = SubDistrict;