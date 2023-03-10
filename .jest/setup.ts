import app from '../src/app';

export default async function (globalConfig, projectConfig) {
  const sequelize = app.get('sequelizeClient');
  await sequelize.sync();

  globalThis.__SEQUELIZE__ = sequelize;
}
