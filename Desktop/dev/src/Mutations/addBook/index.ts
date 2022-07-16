import { gql } from "@apollo/client";


export const ADD_NEW_BOOK = gql`
mutation addBook($id:String,$title:String,$author:String){
    addBook(id: $id,title:$title,author:$author){
    id
    title
    author
    }
}
`;

