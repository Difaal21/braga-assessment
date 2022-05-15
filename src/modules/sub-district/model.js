const { DataTypes } = require('sequelize');
const { sequelize } = require("../../helpers/database/postgresql/connection");

const SubDistrict = sequelize.define('kecamatan', {
    id_kecamatan: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    id_kabkot: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nama_kecamatan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = SubDistrict;