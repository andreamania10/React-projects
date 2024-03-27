import { useRef } from "react"

const Dolares = () => {
    const eurosRef = useRef(null);
    const dollarsRef = useRef(null);

    const calcular = () => {
        const euros = eurosRef.current.value;
        dollarsRef.current.innerHTML = euros * 2;
    }

    return <div>
        <input type="text" ref={eurosRef} />
        <button onClick={calcular}>Calcular</button>
        <p ref={dollarsRef}></p>
    </div>
}

export default Dolares;