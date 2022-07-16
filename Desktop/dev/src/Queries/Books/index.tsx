import { useQuery, gql } from "@apollo/client";
import { styled } from "@linaria/react";
interface iLaunch {
    id:string,
    author: string;
    title: string;
  }
export const BOOKS_QUERY = gql`
  {
    books {
      id
      title
      author
    }
  }
`;

export const Books:React.FC = () => {
  const { data, loading, error } = useQuery(BOOKS_QUERY);
  if (loading) return <p>"Loading..."</p>;
  if (error) return <pre>{error.message}</pre>;
  console.log(data);
    return(
        <ul>
        {data.books.map((book:iLaunch ) => (
          <li key={book.id}>{book.author} created {book.title}</li>
        ))}
      </ul>
    )
}