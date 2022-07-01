# POPCHEF - Techninal test monorepo boilerplate

## Install

Make sure to install [Docker](https://docs.docker.com/get-docker/).

```sh
> npm i
> npm run docker:up
> npm run start:all
```

- Frontend is running on default port 4200
- Backend is running on default port 3333
- PostgreSQL database is running over Docker, on a custom port 4242

## Backend

Default environment variables are located in `backend/.env.local`.
You are free to change it.

### Typeorm

- `npm run migration:generate`: Automatically generate migration files with schema changes you made on entities
- `npm run migration:run`: Run latest migration(s) on the database
- `npm run migration:revert`: Revert last migration on the database

- `app/entities`: TypeORM entities directory
- `app/resolvers`: GraphQL resolvers directory
- `app/migrations`: TypeORM migrations directory

- `main.ts`: Root server file, initialize datasource and apollo server
