import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db';

export class Product extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public imageUrl!: string;
    public price!: string;
    public accessibility!: number;
    public freestyle!:  number;
    public poudre!: number
    public piste!: number ;
}

Product.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    description: {
        type: new DataTypes.TEXT(),
        allowNull: true,
    },
    imageUrl: {
        type: new DataTypes.STRING(255),
        allowNull: true,
    },
    price: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    accessibility: {
        type: new DataTypes.INTEGER(),
        allowNull: false,
    },
    freestyle: {
        type: new DataTypes.INTEGER(),
        allowNull: false,
    },
    poudre: {
        type: new DataTypes.INTEGER(),
        allowNull: false,
    },
    piste: {
        type: new DataTypes.INTEGER(),
        allowNull: false,
    },

}, {
    tableName: 'products',
    sequelize: sequelize
});
