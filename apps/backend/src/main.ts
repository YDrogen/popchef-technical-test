/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import AppDataSource from './app/services/Database';
import resolvers from './app/resolvers';

const API_PORT = process.env.API_PORT || 3333;

const boot = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    const schema = await buildSchema({
      // Force any here because type-graphql does not accept empty array.
      // You will be able to type it after your first resolver with type BuildSchemaOptions from type-graphql
      resolvers: resolvers as any,
      validate: false,
    });
    const server = new ApolloServer({ schema });

    await server.listen(API_PORT);

    console.log(`Listening at http://localhost:${API_PORT}/graphql`);
  } catch (err) {
    console.error(err);
  }
};

boot();
