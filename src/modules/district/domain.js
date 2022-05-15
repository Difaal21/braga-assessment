const { SUCCESS, ERROR } = require("../../helpers/http-status");
const query = require("./query");
const logger = require("../../helpers/utils/logger");

class District {
    constructor() {
        this.ctx = "District";
    };

    async getAllDistrict() {
        const ctx = `${this.ctx}.getAllDistrict`;

        const result = await query.getAllDistrict();
        if (result.error) {
            logger.log(ctx, result.message, "query.getAllDistrict()");
            return new ERROR.INTERNAL_SERVER_ERROR();
        };

        if (result.length < 1) {
            logger.log(ctx, result.message, "query.getAllDistrict()");
            return new ERROR.NOT_FOUND(null, "District not found");
        };
        return new SUCCESS.OK(result.data);
    };


    async getDetailDistrict(id) {
        const ctx = `${this.ctx}.getDetailDistrict`;

        const result = await query.getDetailDistrict(id);
        if (result.error) {
            logger.log(ctx, result.message, "query.getDetailDistrict()");
            return new ERROR.INTERNAL_SERVER_ERROR();
        };

        if (!result.data) {
            logger.log(ctx, result.message, "query.getDetailDistrict()");
            return new ERROR.NOT_FOUND(null, "District not found");
        };
        return new SUCCESS.OK(result.data);
    };

};

module.exports = District;