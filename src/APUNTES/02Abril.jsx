//CON USESTATE TAMBIÉN PODEMOS RECOGER UN VALOR DEL USUARIO

import { useState } from "react"

Si queremos recoger un valor introducido por el usuario, también usaremos useState.

//Creamos una función
const App = () => {
    const [inputText, setInputText] = useState('')

    return (
        <div className="App">
            <input type="text" onChange={e => setInputText(e.target.value)} />
            <div>{inputText}</div>
        </div>
    )
}

export default App;

//En el caso de que quisiéramos saber si una checkbox está marcada o no, usaríamos la propiedad checked: 
<input type="checkbox" onclick={e => setEstaMarcado(e.target.checked)} />


//Cambiar el valor al hacer click en un botón, en lugar de cuando cambia el input

export default () => {
    const [inputText, setInputText] = useState('');
    const [valorAMostrar, setValorAMostrar] = useState(0);

    return (
        <div className="App">
            <input type="text" onChange={e => setInputText(e.target.value)} />
            <button onClick={() => setValorAMostrar(inputText)}>Cambiar valor</button>
            <div>{valorAMostrar}</div>
        </div>
    );
}

//COMPONENTES 
Son partes de la interfaz visual.Empieza por mayúscula.Si no empieza por mayúscula, tendremos un error que es difícil de interpretar.

const MyOwnComponent = () => {
    return <h1>My Own Component</h1>
}

const App = () => {
    return (
        <div>
            <MyOwnComponent />
        </div>
    )
}

export default App


//En un fichero json por narices va con comillas, cosa que en javascript podría ir sin. En un fichero json no puede importar fotos o videos, simplemente la ruta de dirección, cosa que en js sí. 