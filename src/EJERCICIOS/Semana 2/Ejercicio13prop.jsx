import ComponenteUno from "../../components/ComponenteUno"
import ComponenteDos from "../../components/ComponenteDos"
import { useState } from 'react';


const App = () => {
    const [result, setResult] = useState('');
    return (
        <div>
            <ComponenteUno calculate={setResult} />
            <ComponenteDos result={result} />
        </div>
    )
}

export default App
