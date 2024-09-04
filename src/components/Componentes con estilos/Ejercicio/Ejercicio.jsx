import { BtnLeft, BtnRight, GlobalStyle, Img, MainImg, Row } from "./Ejercicio.styles"
import works from '../../../assets/data/workouts'
import { useState } from 'react';


const Ejercicio = () => {
  const [workouts, setWorkouts] = useState(works)
  const [currentWorkOutNumber, setCurrentWorkOutNumber] = useState(0);
  const [visto, setVisto] = useState(0);

  const workout = workouts[currentWorkOutNumber]

  const Siguiente = () => {
    console.log(1)
    setCurrentWorkOutNumber(currentWorkOutNumber < workouts.length - 1 ? currentWorkOutNumber + 1 : currentWorkOutNumber)
  }

  const Anterior = () => {
    setCurrentWorkOutNumber(currentWorkOutNumber > 0 ? currentWorkOutNumber - 1 : 0)
  }


  return (
    <div>
      <GlobalStyle />
      <h1>
        <BtnLeft onClick={Anterior} />
        {workout.title}
        <BtnRight onClick={Siguiente} />
      </h1>

      <Row>
        <MainImg src={workout.exercises[visto].img} />
        <Row>
          {
            workout.exercises.map((exercise, i) => <Img key={i} $active={i === visto} src={exercise.img} onClick={() => setVisto(i)} />)
          }
        </Row>
      </Row>
    </div>
  )
}

export default Ejercicio;
