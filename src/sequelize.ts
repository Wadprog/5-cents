/* eslint-disable linebreak-style */
import { Sequelize } from 'sequelize';
import { Application } from './declarations.d';
import { DbSettingsType } from './Types/dbSettings';

export default (app: Application) => {
  const dbConfig: DbSettingsType = app.get('dbSettings');

  const options = { logging: false };
  const sequelize = dbConfig?.connectionString
    ? new Sequelize(dbConfig.connectionString, options)
    : new Sequelize({ ...dbConfig, ...options });

  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  // eslint-disable-next-line func-names
  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const { models } = sequelize;
    Object.keys(models).forEach((name) => {
      if ('associate' in models[name]) {
        // @ts-ignore
        models[name].associate(models);
      }
    });

    // Sync to the database
    app.set('sequelizeSync', sequelize.sync({ force: true }));

    return result;
  };
};
