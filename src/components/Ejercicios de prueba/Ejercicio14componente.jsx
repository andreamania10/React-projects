import { useState } from "react"

const Componente1 = ({ sendVal }) => {
    const [numero, setNumero] = useState('')

    const updateVal = (v) => {
        setNumero(v);
        sendVal(v);
    }

    return (
        <div>
            <button onClick={() => {
                setNumero(numero + 1)
                updateVal(numero + 1)
            }}>+</button>
            <input type="text" value={numero} onChange={e => updateVal(Number(e.target.value))} />
            <button onClick={() => {
                setNumero(numero - 1)
                updateVal(numero - 1)
            }}>-</button>

        </div>
    )
}

export default Componente1
