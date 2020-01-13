import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});


server.applyMiddleware({ app, path: '/home' })
app.listen({ port: 8080 }, () => {
    console.log('app is running on port 8080');
});