import Box from "./components/Box"
import { Container, MyStyledComponent } from './components/Box/Box.styles';
import { useState } from "react";

const App = () => {
    const [color, setColor] = useState('red');
    return (

        <div>
            <Container>
                <button onClick={() => setColor('blue')}>Cambiar color</button>
                <MyStyledComponent color={color} ></MyStyledComponent>
                <Box> </Box>
            </Container>
        </div>
    )
}
export default App;