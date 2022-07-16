import { Form } from './styles'
import { ReactLabel } from '../../shared/Label'
import { ReactInput } from '../../shared/Input'
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_BOOK } from '../../Mutations/updateBook';
import { SubmitButton } from '../../shared/Button';
import { BOOKS_QUERY } from '../../Queries/Books';
export const ReactUpdateBook:React.FC = () =>{
    const [mutation] = useMutation(UPDATE_BOOK,{
        refetchQueries: [{ query: BOOKS_QUERY }]
    });
    const[bookId,setBookId] = useState('');
    const[title,setTitle] = useState('');
    const[author,setAuthor] = useState('');
    const sendData = (e:React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(bookId,title,author);
        mutation({variables:{id:bookId,title:title,author:author}})
    };
    return(
        <Form onSubmit={sendData}>
        <h3>Update Book</h3>
        <ReactLabel text={'id'} />
        <ReactInput onChangeFunc={setBookId} placeholder={'id'}/>
        <ReactLabel text={'title'}/>
        <ReactInput onChangeFunc={setTitle} placeholder={'book name'}/>
        <ReactLabel text={'author'}/>
        <ReactInput onChangeFunc={setAuthor} placeholder={'author name'}/>
        <SubmitButton/>
        </Form>
    )
}