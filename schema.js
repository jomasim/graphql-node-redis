import { gql } from 'apollo-server-express';

export default gql`
type Query{
 products: [Product],
},
type Product{
    id:ID!,
    name: String,
    description: String,
}

type User {
    username: String,
    password: String,
}

type Mutation {
    register( username: String!, password: String!): User!
}
`