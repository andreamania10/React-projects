import "../EJERCICIOS/Semana 2/CSS/stylekdrama.css"

const Kdrama = ({ serie }) => {
    return (
        <div>
            <h1>{serie.title}</h1>
            <p>{serie.year}</p>
            <p className="bold">{serie.starring}</p>
        </div>
    )
}

export default Kdrama; 