import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../app/UserProvider';
import { createTask, getItems } from '../../../../app/people';
import Task from '../components/Task';

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [taskText, setTaskText] = useState('')
  const [userId, setUserId] = useContext(AppContext)

  const getTaskByUserId = () => getItems(userId.id).then(i => {
    i.tasks && setTasks(i.tasks)
  });
  console.log(userId)
  useEffect(() => {
    getTaskByUserId()
  }, [])
  return (
    <div>
      <h1>Tasks</h1>

      <textarea onChange={(e) => setTaskText(e.target.value)}></textarea>
      <p><button onClick={async () => {
        await createTask(userId, { taskText })
        getTaskByUserId();
      }}>Añadir tarea</button></p>
    </div>
  )
}

export default Tasks
