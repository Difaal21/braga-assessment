const SubDistrict = require("./domain");
const wrapper = require("../../helpers/utils/wrapper");

const getAllSubDistrict = async (req, res) => {
    const subDistrictId = req.params.id;

    const getData = async () => {
        const subDistrict = new SubDistrict();
        const result = await subDistrict.getAllSubDistrict(subDistrictId);
        return result;
    };

    const sendResponse = async (result) => {
        return result.error ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
    };

    sendResponse(await getData());
};

const getDetailSubDistrict = async (req, res) => {
    const { districtId, subDistrictId } = req.params;


    const getData = async () => {
        const subDistrict = new SubDistrict();
        const result = await subDistrict.getDetailSubDistrict(districtId, subDistrictId);
        return result;
    };

    const sendResponse = async (result) => {
        return result.error ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
    };

    sendResponse(await getData());
};

module.exports = { getAllSubDistrict, getDetailSubDistrict };