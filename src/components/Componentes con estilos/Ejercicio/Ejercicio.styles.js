import styled, { createGlobalStyle, css } from 'styled-components';
import flecha from "../../../assets/img/flecha.png"

export const GlobalStyle = createGlobalStyle`
body{
  display: flex; 
  align-items: center;
  justify-content: center; 
}
`
export const h1 = styled.div`
display: flex; 
max-width: 400px;
margin-top: 0; 
`

const Btn = css`
  display: inline-block; 
  cursor: pointer;
width: 40px; 
height: 40px;
background-image: url(${flecha});
background-size: 100% 100%;

`

export const BtnLeft = styled.span`
${Btn}
margin-right: 10px; 
`

export const BtnRight = styled.span`
${Btn}
transform: rotate(180deg);
margin-left: 10px; 
`

export const Row = styled.div`
display: grid; 
grid-template-columns: 50% 50%;
`

export const MainImg = styled.img`
  width: 100%
`

export const Img = styled.img`
  width: 100%; 
  border-radius: 40px; 
  ${({ $active }) => $active ? 'border: 4px solid red; z-index:1' : 'border:4px solid transparent'}
`