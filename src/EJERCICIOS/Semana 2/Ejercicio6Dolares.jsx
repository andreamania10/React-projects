import { useState } from "react";

const Dolares = () => {
    const [dollars, setdollars] = useState('')

    const calcular = (e) => {
        const euroValue = e.target.value;
        setdollars(euroValue * 2);

    }

    return (
        <div>
            <input type="text" onChange={calcular} />
            <p>{dollars}</p>
        </div>
    )
}

export default Dolares; 