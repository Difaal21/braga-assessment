const SubDistrict = require("./model");
const { SUCCESS, ERROR } = require("../../helpers/http-status");
const District = require("../district/model");

District.hasMany(SubDistrict, { foreignKey: "id_kabkot" });
SubDistrict.belongsTo(District, { foreignKey: "id_kabkot", as: "kabupaten_kota" });

const getAllSubDistrict = async (id) => {
    try {
        const result = await SubDistrict.findAll(
            {
                attributes: [["id_kecamatan", "id"], ["nama_kecamatan", "nama"]],
                include: [
                    {
                        model: District,
                        as: "kabupaten_kota",
                        attributes: [["id_kabkot", "id"], ["nama_kabupaten_kota", "nama"]]
                    }
                ],
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


const getDetailSubDistrict = async (districtId, subDistrictId) => {
    try {
        const result = await SubDistrict.findOne(
            {
                attributes: [["id_kecamatan", "id"], ["nama_kecamatan", "nama"]],
                include: [
                    {
                        model: District,
                        as: "kabupaten_kota",
                        attributes: [["id_kabkot", "id"], ["nama_kabupaten_kota", "nama"]]
                    }
                ],
                where: {
                    id_kabkot: districtId,
                    id_kecamatan: subDistrictId
                }
            }
        );
        return new SUCCESS.OK(result);
    } catch (error) {
        return new ERROR.INTERNAL_SERVER_ERROR(null, error.message);
    };
};


module.exports = { getAllSubDistrict, getDetailSubDistrict };