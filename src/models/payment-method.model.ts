// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model, } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const paymentMethod = sequelizeClient.define(
    'paymentMethod',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iconFamily: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      custom: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      details: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (paymentMethod as any).associate = function (models: any): void {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return paymentMethod;
}
