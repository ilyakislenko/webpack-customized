import { gql } from "@apollo/client";


export const DELETE_BOOK = gql`
mutation removeBook($id:String){
    removeBook(id: $id){
    id
    }
}
`;

