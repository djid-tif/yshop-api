import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('yshop-db', 'ceuudjjzqjdmotm55ihw', 'pscale_pw_50iqcYKWqMKXARpauCYSM6PIZTcilqilSGKGrGViFY1', {
    host: 'eu-west.connect.psdb.cloud',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Cette option doit être utilisée avec prudence
        }
    }
});

export default sequelize;
