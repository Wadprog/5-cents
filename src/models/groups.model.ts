// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const groups = sequelizeClient.define('groups', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    avatar:{
      type: DataTypes.STRING,
      
    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (groups as any).associate = function (models: any): void {
    groups.hasMany(models.transactions);
    groups.belongsToMany(models.users, { through: 'userGroups' });
  };

  return groups;
}
