import { useParams } from "react-router-dom"

const Product = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Product {id}</p>
    </div>
  )
}

export default Product