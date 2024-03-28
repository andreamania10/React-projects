import { useRef } from "react";

const Grados = () => {
    const gradosCRef = useRef(null);
    const gradosFRef = useRef(null);

    const calcular = () => {
        const gradosC = gradosCRef.current.value;
        gradosFRef.current.innerHTML = gradosC * 9 / 5 + 32;
    }

    return <div>
        <input type="text" ref={gradosCRef} />
        <button onClick={calcular}>Calcular</button>
        <p ref={gradosFRef}></p>
    </div>
}

export default Grados;