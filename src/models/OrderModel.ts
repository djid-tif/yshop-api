import {Model, DataTypes, Sequelize} from 'sequelize';
import sequelize from '../database/db';

export class Order extends Model {
    public id!: number; // Notez que l'utilisation de "!" est une manière de dire à TypeScript que ces propriétés seront initialisées par Sequelize, et non par le constructeur de la classe.
    public status!: string;
    public itemIds!: number[];
    public total!: number;
}

Order.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
},{
    tableName: 'orders',
    sequelize: sequelize, // C'est l'instance de Sequelize que vous avez configurée
});