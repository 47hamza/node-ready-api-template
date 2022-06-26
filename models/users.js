const {DataTypes} = require('sequelize');

// DB Connection
const sequelize = require('../connection/db_connection');

// User Schema
const User = sequelize.define('users', {
        name: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        password: {
            type: DataTypes.STRING,
            defaultValue: "12345678"
        }
    },
// Other Settings
    {
        //  Change Table Name
        //  tableName: 'userData',
        // Disable TimeStamps
        // timestamps: false,

        // Disable Single Timestamps
        // updatedAt: false,
        // createdAt: false,

        // Change Name of Entity
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',

        // Change Engine
        // engine: 'MYISAM'
    });

module.exports = User;