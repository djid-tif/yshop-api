import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db';

export class Order extends Model {
    public id!: number; // Notez que l'utilisation de "!" est une manière de dire à TypeScript que ces propriétés seront initialisées par Sequelize, et non par le constructeur de la classe.
    public userId!: number; // Supposant que vous avez un modèle User
    public status!: string;
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
    status: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    // Autres champs selon vos besoins
}, {
    tableName: 'orders',
    sequelize: sequelize, // C'est l'instance de Sequelize que vous avez configurée
});