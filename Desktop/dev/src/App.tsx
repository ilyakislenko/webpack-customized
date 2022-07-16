import { ReactAddBook } from './processes/FormAddBook';
import { ReactDeleteBook } from './processes/FormDeleteBook';
import { ReactUpdateBook } from './processes/FormUpdateBook';
import { Books } from './Queries/Books';
import { Container } from './styles';

function App() {
    return (
    <div>
        <h1>Now you can see some standard logic of apollo client interaction with apollo server</h1>
        <Books/>
        <Container>
        <ReactAddBook/>
        <ReactDeleteBook/>
        <ReactUpdateBook/>
        </Container>
    </div>
    );
}

export default App;
