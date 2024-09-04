Cuando tengamos que hacer autentificación, vamos a tener que ponerlo en otro fichero aparte del services, donde allí solo se mostrará lo del usuario, como por ejemplo crear, actualizar o eliminar.

JSX porque es un componente. 

useUserContexxt y recuperas el contexto global.:

const [, setUser] = useUserContext();

const handleSubmit = () => {
  access(name).then(setUser(userId))
}


Componente que engloba los consumers es el provider.El documento App es donde está los consumers. 

En el useContext le pasamos el contexto, que se llama AppContext. 
Lo normal es que tengas que importar el useContext. 
Una cosa es el método(useUserContext) y otro es el componente(useProvider)


__reactRouterVersion: para crear una plantilla de router.


const handleSubmit = () => {
  access(name).then(userId => {
    setUser(userId)
  })
  navigate('/page2') //el navigate te ayuda a que cuando envía la respuesta, se dirige directamente a la página 2. 
}


const createTask(userId, obj)
const colRef = collection(db, 'users', userId, 'tasks')

const Page2 = () => {
  const [userId] = useUserContext()
  const [taskText, setTaskText] = useState();
  const handleSave = () => {
    createTask(userId, { taskText });
  }
}

useEffect(() => {

  getTasks(userId).then(data) => {

  }, []
}, [])

const updateTasks = () => getTasks(userId).then(setTasks)
const handleSave = async () => {
  await createTask(userId, { taskText })
}