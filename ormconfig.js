module.exports = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'challengenode',
  entities: ['src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/shared/infra/typeorm/migrations',
    entitiesDir: 'src/modules/**/infra/typeorm/entities',
  },
};
