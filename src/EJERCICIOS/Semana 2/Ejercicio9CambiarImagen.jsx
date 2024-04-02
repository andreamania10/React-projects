import { useState } from "react";

const Imagen = () => {
    const [imagenes, setImagenes] = useState(ANIMAL_IMAGES.img1)

    return (
        <div>
            <button onClick={() => setImagenes(ANIMAL_IMAGES.img1)}>Imagen 1</button>
            <button onClick={() => setImagenes(ANIMAL_IMAGES.img2)}>Imagen 2</button>
            <button onClick={() => setImagenes(ANIMAL_IMAGES.img3)}>Imagen 3</button><br />
            <img src={imagenes} alt="Imagen" />
        </div>
    )
}

const ANIMAL_IMAGES = {
    img1: "http://via.placeholder.com/111x111",
    img2: "http://via.placeholder.com/222x222",
    img3: "http://via.placeholder.com/333x333",
};

export default Imagen