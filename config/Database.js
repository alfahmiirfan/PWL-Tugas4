import {Sequelize} from "sequelize";

const db = new Sequelize('db-tugas4', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;