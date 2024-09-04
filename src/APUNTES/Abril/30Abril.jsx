CONTEXT API: 
Proporciona una forma de compartir datos entre componentes sin pasar props manualmente a todos los niveles. 

Nuestro objeto PROVIDER se encargará de hacer visible el objeto que le pasemos para todos los componentes anidados en él. 

El PROVIDER solo puede utilizar la prop value para determinar la información que va a ser almacenada.Si queremos almacenar varios valores, lo que haremos será usar un objeto con múltiples propiedades. 

El login y el userInfo son los dos componentes que quiero que se repitan el mismo valor.

const App = () => (
  <UserProvider>
    <Login />
    <UserInfo />
  </UserProvider>
);

export default App;

El userProvider es la capa que envuelve para que los dos componentes se pongan al mismo nivel. 

Si quisiéramos poner el router en la App, podríamos el login y el userInfo dentro del router, y dentro del UserProvider, pondríamos el enlace del router. 


En un document aparte, dentro de la carpeta App, y con otra carpeta que se llama "providers", llamado UserProvider, se le pondría una prop llamado "children" donde daríamos una const de cada usuario, que devolvería el valor la AppContext.Provider value sobre el user y el setUser.

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <AppContext.Provider value={[user, setUser]}>
      {children}
    </AppContext.Provider>
  );
}

export default UserProvider;

En el documento de Login, en la carpeta de componentes, se importa el useUserContext extraído del document UserProvider, en el cuál hacemos un const sin user, solo setUser, con valor de useUserContext.

  Finalmente, crearemos un botón en el cuál hacemos función anónima de setUser, con la información del usuario, como es el username y el uid.

import { useUserContext } from '../app/providers/UserProvider';

const Login = () => {
  const [, setUser] = useUserContext();

  return (
    <button onClick={() => setUser({ username: 'Paco', uid: 33 })}>Save User</button>
  );
}

export default Login;

Finalmente, en el documento de UserInfo(el segundo componente) se importará igual que en el Login el useUserContext y se dará el user en el const a secas, sin setUser.Se va a devolver en una <p>el user.username</p>

import { useUserContext } from '../app/providers/UserProvider';

const UserInfo = () => {
  const [user] = useUserContext();
  return (<p>{user.username}</p>);
}

export default UserInfo;