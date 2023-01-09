// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const transaction = sequelizeClient.define(
    'transaction',
    {
      amount: {
        type: DataTypes.DECIMAL(10, 2),
      },
      description: {
        type: DataTypes.TEXT,
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
  (transaction as any).associate = function (models: any): void {
    transaction.belongsTo(models.paymentMethods, {});
    transaction.belongsTo(models.transaction_types, {});
    transaction.belongsTo(models.users, { as: 'createdBy' });
    transaction.belongsToMany(models.tags, { through: 'transaction_tags' });
    transaction.belongsToMany(models.categories, {
      through: 'transaction_categories',
    });
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return transaction;
}
