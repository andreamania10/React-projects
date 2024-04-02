import { useState } from "react"

const Rectangulo = () => {
    const [ancho, setAncho] = useState('')
    const [alto, setAlto] = useState('')
    const [superficie, setSuperficie] = useState('');

    const calcular = (e) => {
        setSuperficie(ancho * alto)
    }

    return (
        <div>
            <input type="text" onChange={e => setAncho(e.target.value)} />
            <input type="text" onChange={e => setAlto(e.target.value)} />
            <button onClick={calcular}>Calcular</button><br></br>
            <p>{superficie}</p>
        </div>
    )
}

export default Rectangulo
