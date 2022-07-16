import { gql } from "apollo-server";
export const typeDefs = gql`
type Book {
    id: String!
    title: String!
    author: String!
}
type Query {
    books: [Book]
}
type Mutation {
    addBook(id:String,title:String,author:String): [Book]
    updateBook(id:String,title:String,author:String): [Book]
    removeBook(id:String): [Book]
}`;