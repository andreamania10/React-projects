import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where, onSnapshot } from "./services/api2";

const collectionName = 'paciente';

// CREATE
export const createItem = async (obj) => {
  const colRef = collection(db, collectionName);
  const data = await addDoc(colRef, obj);
  return data.id;
}

// UPDATE
export const updateItem = async (id, obj) => {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, obj)
}

// READ
export const getItems = async () => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef, where('age', '==', value)));
  return getArrayFromCollection(result);
}

export const getItemById = async (id) => { //en el parámetro, cuando ponemos id entre paréntesis, pero esto porque lo ha puesto así pablo, si en realidad pusiera "obj"
  const docRef = doc(db, collectionName, id); //aquí, cuando se menciona el id como parámetro, se tendría que poner "obj.id" si queremos saber el id de la colección de personas. 
  const result = await getDoc(docRef);
  return result.data();
}

// DELETE
export const deleteItem = async (id) => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
}

const getArrayFromCollection = (collection) => {
  return collection.docs.map(doc => {
    return { ...doc.data(), id: doc.id };
  });
}

//Los métodos donde se va a poder hacer Alta, Baja, modificación y consulta. 

export const access = async (name) => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef, where('name', '==', name)));
  if (result.size === 0) {
    const a = await addDoc(colRef, { name });
    return a.id;
  }
  return result.docs[0].id;
}

//CREATE DEL EJERCICIO DE LISTAS DE TAREAS
export const createTask = async (userId, obj) => {
  console.log(userId, obj)
  const colRef = collection(db, 'name', userId, 'tasks');
  const data = await addDoc(colRef, obj);
  return data.id;
}

//UPDATE DE LA LISTA
export const updateTask = async (userId, taskPos, taskText) => {
  const result = await getDoc(doc(db, collectionName, userId));
  const user = result.data();
  const newTasks = user.tasks.map((task, i) => {
    if (i !== taskPos) {
      return task;
    } else {
      return { ...task, txt: taskText }
    }
  })
  await updateDoc(doc(db, collectionName, userId), { ...user, tasks: newTasks });
}

//DELETE DE LA LISTA
export const deleteTask = async (userId, taskPos) => {
  console.log(userId)
  const result = await getDoc(doc(db, collectionName, userId));
  const user = result.data();
  console.log('deleteTask', user)
  await updateDoc(doc(db, collectionName, userId), { ...user, tasks: user.tasks.filter((t, i) => i !== taskPos) });
}

export const newTask = async (id, taskText) => {
  const result = await getDoc(doc(db, collectionName, id));
  const user = result.data();
  const prevTasks = user.tasks ? [...user.tasks, { txt: taskText }] : [{ txt: taskText }];
  await updateDoc(doc(db, collectionName, id), { ...user, tasks: prevTasks });
}
