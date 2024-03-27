import { useRef } from "react";

const Triangulo = () => {
    const anchoRef = useRef(null);
    const altoRef = useRef(null);
    const areaRef = useRef(null)

    const calcular = () => {
        const ancho = anchoRef.current.value;
        const alto = altoRef.current.value;
        areaRef.current.innerHTML = ancho * alto
    }

    return <div>
        <input type="text" ref={anchoRef} />
        <input type="text" ref={altoRef} />
        <button onClick={calcular}>Calcular</button>
        <p ref={areaRef}></p>
    </div>
}

export default Triangulo;