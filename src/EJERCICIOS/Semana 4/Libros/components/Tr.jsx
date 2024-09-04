import { useState } from "react"
import { deleteItem, updateItem } from "../../../../app/services/people"

const Tr = ({ book, renderBooks }) => {
  const [title, setTitle] = useState(book?.title)
  const [price, setPrice] = useState(book?.price)

  return (
    <tr>
      <td>{book.id}</td>
      <td><input type="text" defaultValue={title} onChange={(e) => { setTitle(e.target.value) }} /></td>
      <td><input type="text" defaultValue={price} onChange={(e) => { setPrice(e.target.value) }} /></td>
      <td><button onClick={() => {
        deleteItem(book.id)
        renderBooks()
      }}>Remove</button><button onClick={() => {
        alert("Libro actualizado")
        updateItem(book.id, { title, price })
        renderBooks()

      }}>Update</button></td>
    </tr>
  )
}

export default Tr

//Al TR se le pasaré un prop llamado Book y con esa Prop pintarás los valores dentro. Los libros, básicamente. 