// Cuando quieres exportar solo una fuunción en concreto y no todo el procedimiento ses usaría

1. Poner en el main.jsx que cuando importamos App se cubre con {corchetes así }.

2. Luego en la constante donde queremos exportar, si solo queremos que se ejecute esa función, ponemos:

export const App = () =>

    y quitamos el export default App de abajo de todo.


//EJEMPLO FOTOS 
import heroes from "./data/heroes";

export const App = () => {
    return (
        <div>
            {heroes.map((h) => (
                <div key={h.id}>
                    {h.suuperhero}

                    <img src={h.img} alt="" /> //el alt es la descripción de la foto. Se usa sobretodo para cuando las personas invidentes necesitan información sobre la foto, además de que antes de que existiera la IA, se ponía la descripción y se ejecutaba directamente.

                </div>
            ))}
        </div>
    )
}

styled components 
para instalar se hace: npm i styled - components
En la carpeta app, en vez de crear un archivos de estilos, vamos a crear un documento js importando:

import styled from "styled-components"

export const Box = styled.div`
    width: 100px; 
    height: 100px; 
    background-color: red;
`
//este componente lo vas a exportar fuera (por lo tanto lo tendrá que exportar entre llaves en el main)//

luego en el documento de App

import { Box } from "./app/styled"

export const App = () => {
    return (
        <div>
            <Box />
        </div>
    )
}

export default App;

//las comillas `` significan template literals. Para poder poner código javascript. 
Abres llaves para meter js 
En el documento de Box, donde hay los estilos, pondremos esto para cubrir el color del Box(COLOR == PROPS).Cuando escribimos en el Box color = "blue", es el props.En el otro documento Box cuando le damos un valor que sea de otro color, por ejemplo rojo, nos va a donar el color rojo en el Box. 

Para recuperar las props, no significa que lo hay entre paréntesis es que lo sea, simplemente es una variable cualquiera, podría poner cualquier cosa.Equivaldría a blue, que es lo que le he pasado al box color = "blue", donde hay el texto.

Cuando ponemos props hacemos una desestructuración.

    //DOCUMENTO BOX PARA LOS ESTILOS
    ackground - color: ${ ({ color }) => color || "red" } //queda mucho más fino


background - color:${ (props) => props.color };
background - color: red; //es independiente
margin: ~{(props) => props.m}px; //properties

//Lo mismo pasa con los margin, se puede poner cualquier valor. 
margin: ${ ({ m }) => m } px; 

span{
    font - weight: bold;
}
//Esta manera es mucho más útil para ser más preciso en cuanto a menos líneas de código, porque a la larga habrán varias páginas de estilos y por lo tanto cada una tendrá poco código, con sus estilos pertinentes, y que ayuda a concatenar código y ser más limpio. 
//Solo se usará para un único estilo. 

//DOCUMENTO APP PARA EXPORTAR

export const App = () => {
    return (
        <div>
            <Box color="blue" m="300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis doloremque optio. Perferendis praesentium, <span> totam atque autem iusto provident cumque inventore</span> quae ipsa cupiditate, dolorem deleniti quaerat odit pariatur blanditiis.</Box>
        </div>
    )
}

//OTRO EJEMPLO COMO ATRIBUTOS EN FUNCIÓN DE PROPS
<Input myMaxLength={2} />
export const Box = styled.div.attrs({ className.'pt-3'})``;
export const Input = styled.input.attrs(props => ({
    type: "password",
    maxLength: props.myMaxLength || 5,
}))`
color: blue;
`

    //Se podría hacer así
    < Mylink href = "www.google.com" >
        Lorem
</Mylink >

import styled from "styled-components"

export const Mylink = styled.a.attrs(() => ({ target: "_blank" }))`
color: red`

//Para no tener que repetir, se usa un atributo, donde metes un enlace. El atributo es para recoger el nom del atributo el igual y el valor del atributo. 
Si haces un enlace a normal de toda la vida, no te saldrá el target blank, (es para abrir en una pestaña nueva, es HTML). 

CUANDO LO EXPORTAS SALE EL TEXTO, Y CUANDO PICAS LA FRASE, TE SALDRÁ UNA NUEVA PESTAÑA CON EL HREF QUE HEMOS MOSTRADO EN EL MYLINK HREF.SIEMPRE SE TIENE QUE USAR CON MYLINK. 
