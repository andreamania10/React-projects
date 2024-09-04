import { Carta } from "../app/CSS/julieta.style"
import romeo from '../data/romeo.json';
import { useState } from 'react';

const Julieta = () => {
    const [color, setColor] = useState(0);

    return (
        <div>
            <button onClick={() => setColor(color == 0 ? 0 : color - 1)}>Anterior</button>
            <button onClick={() => setColor(color == romeo.length - 1 ? romeo.length - 1 : color + 1)} >Siguiente</button>
            {romeo.map((lineas, i) =>
                <Carta key={i} color={color} isVisible={i}> {lineas}</Carta>)}
        </div>
    )
}

export default Julieta
