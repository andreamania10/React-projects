import { useState } from 'react';
import { Btn } from '../../components/Box/Box.styles';
import { MyStyledComponent } from '../../components/Box/Box.styles';

const Box = () => {
    const [color, setColor] = useState(' ');
    return (
        <div>
            <Btn onClick={() => setColor('red')}>Pulsa</Btn>
            <MyStyledComponent color={color}></MyStyledComponent>
        </div>
    );
}



export default Box;
