import { useRef } from "react";
import { useState } from "react";

const Grados = () => {
    const gradosCRef = useRef(null)

    const [gradosF, setGradosF] = useState(0);

    const calcular = () => {
        const grados = gradosCRef.current.value;
        setGradosF(grados * 9 / 5 + 32)

    }
    return (
        <div>
            <input type="text" ref={gradosCRef} />
            <button onClick={calcular}>Pulsar</button><br />
            {gradosF}
        </div>
    )

}

export default Grados