//EJERCICIO DE PABLO DE STYLES
- Crear un componente funconal que cargue dos styled components
    - Debemos usar herencia de styled components
        - Uno de los styled components tendrá que cargar una fuente
            - Debemos crear un global style para maquetar el body
                - Debemos tener un efecto hover en nuestros styled components
                    - Uno de los componentes debe cambiar de color en función de una prop
                        - Debemos usar media queries


import styled, { createGlobalStyle } from "styled-components";
import font from "./assets/fonts/Adorable Handmade.ttf";

const desktopStartWidth = 996;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const C1 = styled.div`
  background-color: pink;
  &:hover {
    background-color: blue;
  }
`;

export const C2 = styled(C1)`
  width: 300px;
  height: 300px;
  background-color: ${({ color }) => color};
  font-family: "Adorable Handmade";

  ${mobile} {
    height: 50px;
    width: 1600px;
  }
`;

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Adorable Handmade';
    src: url(${font});
  }

  body{
    background-color: orange;
  }

  `;
