const District = require("./domain");
const wrapper = require("../../helpers/utils/wrapper");

const getDetailDistrict = async (req, res) => {
    const id = req.params.id;

    const getData = async () => {
        const district = new District();
        const result = await district.getDetailDistrict(id);
        return result;
    };

    const sendResponse = async (result) => {
        return result.error ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
    };

    sendResponse(await getData());
};

const getAllDistrict = async (req, res) => {
    const getData = async () => {
        const district = new District();
        const result = await district.getAllDistrict();
        return result;
    };

    const sendResponse = async (result) => {
        return result.error ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
    };

    sendResponse(await getData());
};

module.exports = { getAllDistrict, getDetailDistrict };