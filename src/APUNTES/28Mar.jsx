/* APUNTES: 

button onClick = { hacerCosas }


Renderizar: Mostrar por pantalla. React se encarga automáticamente cuando ve que es necesario. 
Para que React se entere que ha cambiado, se va a usar "estados", con hook useState. */

import { useState } from "react"

const Dolares = () => {
    cont[v, setV] = useState(0);:  //El 0 es el valor incial del estado. 
    //setV es el estado para modificar el estado.
    let dolares = 0;

    const hacerCosas = () => {
        dolares = 3; //Una variable, aunque cambie de valor, no aporta nada a renderizar. 
        setV(v + 1) //Se ha renderizado, y ha habido un cambio de estado. 
        console.log(dolares)
    }
    const result = 800 * v

    return (
        <div>

            <button onClick={hacerCosas}>Pulsar</button>
            {v}-{result}
        </div>
    )
}

export default Dolares


//EJEMPLO CON DOS ESTADOS Y DOS VALORES. 

import { useState } from "react";

const Dolares = () => {
    const [v, setV] = useState(1);
    const [v2, setV2] = useState(1)

    const hacerCosas = () => {
        setV(v + 1);
    }

    const hacerCosas2 = () => {
        setV2(v2 + 1);
    }
    const result = 800 * v
    return (
        <div>
            <button onClick={hacerCosas}>Pulsar</button>
            <button onClick={hacerCosas2}>Pulsar</button>
            {v}-{v2}
        </div>
    )
}

export default Dolares

//EJEMPLO CON DATOS DE RICKYMORTY
const Ricky = () => {
    const [v, setV] = useState([]) //Ponemos dentro que el valor es un array vacío, por lo tanto dentro van dos corchetes cerrados. 

    const hacerCosas = async () => {
        const data = await fetch('https://rickandmortyapi.com/api/character');
        const res = await data.json();

        const dat = res.results;
        setV(dat)

        console.log(v)
    }
    return (
        <div>
            <button onClick={hacerCosas}>Pulsar</button>
            { }
            {v.map(obj => <div>{obj.name}</div>)}
        </div>
    )
}