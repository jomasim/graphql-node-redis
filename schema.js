import { gql } from 'apollo-server-express';

export default gql`
type Query{
 user: String,
 products: [Product],
},
type Product{
    id:ID!,
    name: String,
    description: String,
}
`