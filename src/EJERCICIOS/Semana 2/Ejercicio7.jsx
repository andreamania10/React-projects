import { useState } from "react";

const Grados = () => {
    const [grados, setGradosF] = useState('')

    const calcular = (e) => {
        const gradosF = e.target.value;
        setGradosF(gradosF * 9 / 5 + 32);

    }

    return (
        <div>
            <input type="text" onChange={calcular} />
            <p>{grados}</p>
        </div>
    )
}

export default Grados; 