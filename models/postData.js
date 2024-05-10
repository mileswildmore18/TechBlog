const { Model , DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class postData extends Model { }

postData.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        post_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelname: 'post',
    }
);

module.exports = postData;