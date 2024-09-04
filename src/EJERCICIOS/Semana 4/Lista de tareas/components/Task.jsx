import { useState } from "react";
import { EditPanel } from "./Taskstyle";
import { deleteTask, updateTask } from "../../../../app/people";

const Task = ({ userId, i, txt, getTasksByUserId }) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState(txt)

  return (
    <div>
      {
        !visible ? <p>{txt}</p> : <EditPanel>
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
          <button onClick={() => { updateTask(userId, i, text) }}>Realmente actualizar</button>
        </EditPanel>
      }
      <button onClick={() => {
        deleteTask(userId, i)
        getTasksByUserId()
      }}>Borrar</button>

      <button onClick={() => { setVisible(!visible) }}>Actualizar</button>
    </div>
  )
}

export default Task