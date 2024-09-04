import { useEffect, useState } from 'react';
import { deleteItem, getItemById, updateItem } from '../../../../app/services/people';
import { useParams } from 'react-router-dom';

const UpdateDelete = () => {
  const [paciente, setPaciente] = useState();
  const { id } = useParams();

  const consulta = () => getItemById(id).then(res => setPaciente(res))

  useEffect(() => {
    consulta()
  }, [])

  return (
    <div>
      <h1>Update and delete</h1>

      <input type="text" placeholder='nombre' value={paciente?.nombre} onChange={e => setPaciente({ ...paciente, nombre: e.target.value })} />

      <input type="text" placeholder='apellido' value={paciente?.apellido} onChange={e => setPaciente({ ...paciente, apellido: e.target.value })} />
      98
      <input type="text" placeholder='fecha' value={paciente?.fechaNacimiento} onChange={e => setPaciente({ ...paciente, fechaNacimiento: e.target.value })} />
      <br />
      <button onClick={async () => {
        await deleteItem(id)
        consulta()
      }}>Delete</button>
      <button onClick={async () => {
        await updateItem(id, paciente)
        consulta()
        alert('usuario modificado');
      }}>Update</button>
    </div>
  )
}

export default UpdateDelete