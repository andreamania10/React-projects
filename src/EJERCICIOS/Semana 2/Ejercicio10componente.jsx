import SegundoComponente from "../../components/SegundoComponente";
import TerceroComponente from "../../components/TercerComponente";
import PrimerComponente from "../../components/PrimerComponente";


const miObjeto = {
    nombre: "Juan",
    apellido: "Martinez",
}
const App = () => {
    return (
        <div>
            <input type="text" />
            <PrimerComponente atributo={miObjeto} valor2={888}>
                La cosa más bella del mundo
            </PrimerComponente>
        </div>)
}

export default App; 
