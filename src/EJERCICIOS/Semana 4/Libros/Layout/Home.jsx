import { useEffect, useState } from "react"
import { createItem, getItems } from "../../../../app/services/people";
import Tr from "../components/Tr";

const Home = () => {
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [books, setBooks] = useState([])

  const getBooks = () => {
    getItems().then(res => setBooks(res))
  }

  useEffect(() => {
    getBooks()
  })

  return (
    <table border="1px">
      <thead>
        <tr style={{ fontWeight: "bold" }}>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Option</th>
        </tr>

        {books?.map(book => <Tr key={book.id} book={book} />
        )}
        <tr>
          <th></th>
          <th><input type="text" onChange={(e) => { setTitle(e.target.value) }} /></th>
          <th><input type="text" onChange={(e) => { setPrice(e.target.value) }} /></th>
          <th><button style={{ display: "flex", left: "0" }} onClick={() => {
            createItem({ title, price })
            getBooks()
          }}>Add</button></th>
        </tr>

      </thead>
    </table>
  )
}

export default Home