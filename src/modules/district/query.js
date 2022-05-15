const District = require("./model");
const { SUCCESS, ERROR } = require("../../helpers/http-status");

const getDetailDistrict = async (id) => {
    try {
        const result = await District.findOne(
            {
                attributes: [["id_kabkot", "id"], ["nama_kabupaten_kota", "nama"]],
                where: {
                    id_kabkot: id
                }
            }
        );
        return new SUCCESS.OK(result);
    } catch (error) {
        return new ERROR.INTERNAL_SERVER_ERROR(null, error.message);
    };
};


const getAllDistrict = async () => {
    try {
        const result = await District.findAll(
            { attributes: [["id_kabkot", "id"], ["nama_kabupaten_kota", "nama"]] }
        );
        return new SUCCESS.OK(result);
    } catch (error) {
        return new ERROR.INTERNAL_SERVER_ERROR(null, error.message);
    };
};


module.exports = { getAllDistrict, getDetailDistrict };