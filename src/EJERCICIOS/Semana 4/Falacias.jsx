import { useEffect } from "react";
import { useState } from "react";
import Falacias from "./JSON/Falacias.json"
import getRandom from "./utils"
import { Opciones } from "./Estilos JS/EstilosFalacia";
const App = () => {
  const [falacy, setFalacy] = useState('')
  const [falacySample, setFalacySample] = useState('')
  const [falacyQuestions, setFalacyQuestions] = useState('')

  useEffect(() => {
    chooseRandomFalacy()

  }, [])

  const chooseRandomFalacy = () => {
    const randomFalacia = Math.floor(Math.random() * Falacias.length)
    const randomSample = Math.floor(Math.random() * Falacias[randomFalacia].samples.length)
    setFalacy(Falacias[randomFalacia])
    setFalacySample(Falacias[randomFalacia].samples[randomSample])

    const dosOpciones = getRandom(Falacias, 2) //array de falacias
    const opciones = dosOpciones.push(Falacias[randomFalacia])
    setFalacyQuestions(opciones)
  }
  console.log(falacyQuestions)
  return (
    <div>
      {falacySample}

      {falacyQuestions.map(falacia => {
        return (
          <Opciones key={falacia}>
            <button>X</button>
            <p>{falacia}</p>
            <button>Mostrar pista</button>
          </Opciones>
        )
      })}
    </div>
  )
}




//jsx acceder a un texto y pintarlo. math.random en el jsx. .



export default App; 