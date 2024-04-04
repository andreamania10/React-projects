import { useState } from "react"
import PopUp from "../../components/Ejercicio18componente"


const App = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <button onClick={() => setVisible(!visible)}>Pestañita</button>
            <PopUp visible={visible} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore accusantium veniam tenetur voluptas eligendi debitis exercitationem, perferendis alias consequatur excepturi quas, maiores nobis fugit aliquid facilis sit hic pariatur atque!</PopUp>
        </div>
    )
}

export default App
