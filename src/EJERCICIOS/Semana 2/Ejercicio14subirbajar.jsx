import { useState } from "react"
import Componente1 from "../../components/Ejercicio14componente"

const App = () => {
    const [numero, setNumero] = useState('')
    return (
        <div>
            <Componente1 sendVal={setNumero}></Componente1>
            {numero}
        </div>
    )
}

export default App
