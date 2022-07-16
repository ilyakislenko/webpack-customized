import { gql } from "@apollo/client";


export const UPDATE_BOOK = gql`
mutation updateBook($id:String,$title:String,$author:String){
    updateBook(id: $id,title:$title,author:$author){
    id
    title
    author
    }
}
`;

