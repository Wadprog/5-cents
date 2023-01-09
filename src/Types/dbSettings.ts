export type DbSettingsType = {
  connectionString?: string;
  database?: string;
  dialect?: "postgres" | "mysql" | "sqlite" | "mariadb" | "mssql";
  host?: string;
  password?: string;
  port?: number;
  username?: string;
};
