React router dom con firebase

BATCH UPDATE: Operaciones que duran horas. 
Dos llamdas update y un comic

Transacción: se hace una operación que se hace o todas o ninguna. 
cONJUNTO DE OPERACIONES EN LA BASE DE DATOS QUE SE HACEN TODAS O NO SE HACE NINGUNA. 

Array con muchos objetos, recorrerías el objeto con un map.
  campo "isActive".

CONSULTAR LOS DOCUMENTOS DE UNA COLECCIÓN A PARTIR DE SU ID:
- Entidad de alumnos: Datos que quiero que se cambien.Si el alumno cambia su foto o el nombre, quiero que cambie en todas las clases que va el alumno.Pero si el alumno está en clase, o ha terminado, esto es algo particular en la clase, porque igual en una clase está pero en otra no. 

Los ID de los alumnos de clase, el resto de datos que hay en el resto de la otra tabla se importa en la clase. 
- Entidad de clase: Tablas donde hay información del alumno, como por ejemplo si ha asistido, los ejercicios, etc.

const result = await getDocs(query(studentsBaseRef, where(documentId(), 'in', students.map(student => student.id)))); //no lo vamos a necesitar en los ejercicios, pero por si lo necesitamos. Esto iría en la API. 
 
students son los alumnos
students.map es el array y extraes el id del alumno.Este map se transformará en un array de ids. 

Yo tengo una clase, y en la que clase solo tengo las IDS de los alumnos, y las fotos y los nombres de los alumnos no están en la clase.Para poder importarlo en la clase, consulto la tabla de alumnos para poder traerme el resto de datos. 


studentsBaseRef es la clase.Es similar a un join.Comparten ID.Se genera por el firebase.addDoc: Añade un nuevo elñemento.secDoc: selecciona el elemento que queremos.

El getDocs o todos los compoenntes de Docs nunca iría a un componente.Iría en el fichero de servicios.
//GetStudentsProfile 

CONSULTAR LOS DOCUMENTOS DE UNA COLECCIÓN A  PARTIR DE SU ID: 
Varibale mergedData: recorre el Array de perfiles, y por cada perfil busco que en cada alumno(student =>) me busco utilizando su ID de alumnos en la clase(studentsInClassroom). 
Me da el perfil del alumno(...student) y la información de los alumnos que están en la clase(...studentInClassroom).

const mergedData = students.map(student => {
  const studentInClassroom = studentsInClassroom.find(({ id }) => student.id === id);
  return { ...student, ...studentInClassroom };
});

//NO LO VAMOS A USAR, PERO UNA APLICACIÓN CON FIREBASE CON MÁS ENTIDAD PUEDE SER USADA. 
