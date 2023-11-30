import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db';

export class Product extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public imageUrl!: string;
    public price!: string;
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
        type: new DataTypes.STRING(255),
        allowNull: true,
    },
    imageUrl: {
        type: new DataTypes.STRING(255),
        allowNull: true,
    },
    price: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    tableName: 'products',
    sequelize: sequelize
});
