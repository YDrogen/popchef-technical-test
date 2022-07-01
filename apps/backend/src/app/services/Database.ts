import { DataSource } from 'typeorm';

import entities from '../entities';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 4242,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'changeme',
  database: process.env.DB_NAME || 'postgres',
  synchronize: true,
  logging: 'all',
  logger: 'advanced-console',
  maxQueryExecutionTime: 1000,
  migrationsTableName: 'migrations',
  entities,
  migrations: [],
});

export default AppDataSource;
