import { useRef } from "react";
import { useState } from "react";

const Dolares = () => {
    const eurosRef = useRef(null)

    const [dolares, setDolares] = useState(0);
    const calcular = () => {
        const euros = eurosRef.current.value;
        setDolares(euros * 2)

    }
    return (
        <div>
            <input type="text" ref={eurosRef} />
            <button onClick={calcular}>Pulsar</button>
            {dolares}
        </div>
    )

}

export default Dolares