import imagen from "../../Imagenes/imagenes.js"
import "../../EJERCICIOS/Semana 2/CSS/estilo.css"

const App = () => {
    return (
        <div>
            {
                imagen.map((image, i) => {
                    return <>
                        <img key={i} src={image.img} />
                        <p>{image.title}</p>
                    </>
                })
            }

        </div >
    )
}

export default App
