import React from 'react'
import Render from '../../components/render'
import { useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
            {
                counter % 2 === 0 ? <p> Par</p> : <p>Impar</p>
            }
        </div >
    )
}

export default App
