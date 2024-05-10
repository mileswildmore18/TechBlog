const { Model , DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class userData extends Model { }

userData.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelname: 'user',
    }
);

module.exports = userData;