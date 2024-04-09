import styled, { createGlobalStyle } from 'styled-components';
import font from '../../Imagenes/Montserrat.ttf';

const desktopStartWidth = 996;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: myFont;
        src: url(${font});
    }
    body {
		padding: 10px; 
    }
`

export const Container = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center;
    height: 500px; 
    background: ${({ color }) => color};
    &:hover {
	background-color: paleGreen;
    }
    ${mobile}{
        background-color: pink;
    }
`;

export const MyStyledComponent = styled.div`
    width: 200px;
    height: 200px; 
    background: ${({ color }) => color};
    `

export const Btn = styled.button`
    width: 200px;
    height: 200px;
    background-color: pink;
    color: black;
`;