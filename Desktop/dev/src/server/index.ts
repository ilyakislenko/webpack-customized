import { ApolloServer} from "apollo-server";
import { typeDefs } from "./schema";
const books = [
    {
    id:"1",
    title: 'The Awakening',
    author: 'Kate Chopin',
    },
    {
    id:"2",
    title: 'City of Glass',
    author: 'Paul Auster',
    },
    {
    id:"3",
    title: 'Fahrenheit 451',
    author: 'RayD Bradbury',
    },
];
const resolvers = {
    Query: {
    books: () => books,
    },
    Mutation: {
        addBook: (_:any,{id,title,author}:{id:string,title:string,author:string}) => {
            const newBook ={
                id:id,
                title:title,
                author:author
            };  
            books.push(newBook);
            return books;
        },
        updateBook: (_:any,{id,title,author}:{id:string,title:string,author:string}) => {
            const index = books.findIndex(book => book.id === id);
            if(title.length !== 0 && author.length !== 0){
                books[index].title = title;
                books[index].author = author;
            } else if(title.length === 0 && author.length === 0){
                return
            } else if(title.length === 0){
                books[index].author = author;
            } else if(author.length === 0){
                books[index].title = title;
            }
            return books
        },
        removeBook: (_:any,{id}:{id:string}) => {
            const index = books.findIndex(book => book.id === id);
            if (index !== -1) {
                books.splice(index, 1);
            }
            console.log(id)
            return books
        }   
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
});

server.listen().then(( {url} ) => {
    console.log(`🚀  Server ready at ${url}`);
});