export type DbSettingsType = {
  connectionString?: string;
  database?: string;
  dialect?: 'postgres' | 'mysql' | 'sqlite' | 'mariadb' | 'mssql' | 'sqlite';
  host?: string;
  password?: string;
  port?: number;
  username?: string;
  storage?: string;
};
