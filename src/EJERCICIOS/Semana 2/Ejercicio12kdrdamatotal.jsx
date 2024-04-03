import Kdrama from "../../components/kdramas";
import kdramas from "../../data/kdramas.json";

const App = () => {
    return (
        <div>
            {kdramas.map(series =>
                <Kdrama serie={series} />)}
        </div>
    )
}

export default App