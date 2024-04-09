import styled from "styled-components";

export const Carta = styled.div`
    background: ${({ color, isVisible }) => isVisible == color && 'pink'};
    margin: 10px; 
`