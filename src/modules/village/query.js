const District = require("../district/model");
const SubDistrict = require("../sub-district/model");
const Village = require("./model");
const { SUCCESS, ERROR } = require("../../helpers/http-status");
const { Op } = require('sequelize');

District.hasMany(Village, { foreignKey: "id_kabkot" });
Village.belongsTo(District, { foreignKey: "id_kabkot", as: "kabupaten_kota" });
SubDistrict.hasMany(Village, { foreignKey: "id_kecamatan" });
Village.belongsTo(SubDistrict, { foreignKey: "id_kecamatan", as: "kecamatan" });

const attributes = [["id_desa_kelurahan", "id"], ["nama_kelurahan", "nama"]];
const includes = [
    {
        model: District,
        as: "kabupaten_kota",
        attributes: [["id_kabkot", "id"], ["nama_kabupaten_kota", "nama"]]
    },
    {
        model: SubDistrict,
        as: "kecamatan",
        attributes: [["id_kecamatan", "id"], ["nama_kecamatan", "nama"]]
    }
];

const getSpecificVillage = async (districtId, subDistrictId) => {
    try {
        const result = await Village.findAll({
            attributes: attributes,
            include: includes,
            where: {
                [Op.and]: [
                    { id_kabkot: districtId },
                    { id_kecamatan: subDistrictId }
                ]
            }
        });
        return new SUCCESS.OK(result);
    } catch (error) {
        return new ERROR.INTERNAL_SERVER_ERROR(null, error.message);
    };
};

const getOneSpecificVillage = async (districtId, subDistrictId, villageId) => {
    try {
        const result = await Village.findOne({
            attributes: attributes,
            include: includes,
            where: {
                [Op.and]: [
                    { id_kabkot: districtId },
                    { id_kecamatan: subDistrictId },
                    { id_desa_kelurahan: villageId }
                ]
            }
        });
        return new SUCCESS.OK(result);
    } catch (error) {
        return new ERROR.INTERNAL_SERVER_ERROR(null, error.message);
    };
};


module.exports = { getSpecificVillage, getOneSpecificVillage };