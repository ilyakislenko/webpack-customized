import { useMutation } from "@apollo/client";
import { useState } from "react";
import { DELETE_BOOK } from "../../Mutations/deleteBook";
import { BOOKS_QUERY } from "../../Queries/Books";
import { SubmitButton } from "../../shared/Button";
import { ReactInput } from "../../shared/Input"
import { ReactLabel } from "../../shared/Label"
import { Form } from "./styles"

export const ReactDeleteBook:React.FC = () => {
    const [mutation] = useMutation(DELETE_BOOK,{
        refetchQueries: [{ query: BOOKS_QUERY }]
    });
    const[bookId,setBookId] = useState('');
    const sendData = (e:React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(bookId);
        mutation({variables:{id:bookId}})
    };
    return(
        <Form onSubmit={sendData}>
        <h3>Delete Book</h3>
        <div>
        <ReactLabel text={'id'} />
        <ReactInput onChangeFunc={setBookId} placeholder={'id'}/>
        </div>
        <SubmitButton />
        </Form>
    )
}