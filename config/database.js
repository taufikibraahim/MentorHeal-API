import { Sequelize } from "sequelize";

const db = new Sequelize('mentorheal', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;