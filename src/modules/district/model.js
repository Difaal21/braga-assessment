const { DataTypes } = require('sequelize');
const { sequelize } = require("../../helpers/database/postgresql/connection");

const District = sequelize.define('kabupaten_kota', {
    id_kabkot: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    nama_kabupaten_kota: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = District;