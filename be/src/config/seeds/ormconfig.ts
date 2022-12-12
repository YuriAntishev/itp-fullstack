import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "secret",
  database: "postgres",
  migrations: ['src/seeds/**/*{.ts,.js}'],
});

export default AppDataSource;