import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users', {
    judul: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Users;