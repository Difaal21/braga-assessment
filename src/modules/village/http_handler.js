const Village = require("./domain");
const wrapper = require("../../helpers/utils/wrapper");

const getAllVillageByDistrict = async (req, res) => {
    const { districtId, subDistrictId } = req.params;

    const getData = async () => {
        const village = new Village();
        const result = await village.getAllVillageByDistrict(districtId, subDistrictId);
        return result;
    };

    const sendResponse = async (result) => {
        return result.error ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
    };

    sendResponse(await getData());
};


const getDetailVillage = async (req, res) => {
    const { districtId, subDistrictId, villageId } = req.params;

    const getData = async () => {
        const village = new Village();
        const result = await village.getDetailVillage(districtId, subDistrictId, villageId);
        return result;
    };

    const sendResponse = async (result) => {
        return result.error ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
    };

    sendResponse(await getData());
};

module.exports = { getDetailVillage, getAllVillageByDistrict };