import Book from "../../components/Book"
import books from '../../data/books.json';



const App = () => {
    return (<div>
        {books.map((item, i) =>
            <Book key={i} title={item.title} author={item.author} />)}
    </div>
    )
}

export default App;