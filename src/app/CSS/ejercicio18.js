import styled from "styled-components"

export const PopUp = styled.div`
    background-color: red; 
    padding: 30px; 
`

export const Back = styled.div`
    display: ${({ visible }) => visible === true ? "block" : "none"};
    background-color: salmon; 
    margin: auto; 
    width: 300px; 
    height: 300px; 
    padding: 15px; 

    
    
`