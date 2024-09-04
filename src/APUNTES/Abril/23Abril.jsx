import { doc, collection } from '../../app/services/api2';
FIREBASE: 
Se guarda la información en una base de datos.

  Tipo:
- Alta
  - Baja
  - Modificación
  - Consulta

    Servicio gratuito hasta 10 proyectos.

  CRUD: Create Read Update Delete

    //Autentificación

    Realtime Database: hacer aplciaciones en tiempo real. 
    
    Usa directamente Firestore database que se puede dar el valor de real time. 

    En firestore database crear base de datos.En europa.Modo producción y Crear. 
    La diferencia con el otro, a los 30 días tendrías que modificar algunos cambios(el de prueba), hay que cambiar la configuración. 

    Menú reglas, hay que habilitar el acceso.poniendo true donde pone false. 

    En la ruedecita de configuración, picamos configuración de proyecto.No hay ninguna clave de API web.Como no hemos dado de alta en el servicio de autentificación, tenemos que ir a compilación, autentificación. 
    Lo creamos con Google, poniendo el email y el nombre del proyecto. 
    Después si vuelves en el engranaje, se verá que en la configuración del proyecto, la clave API ya tiene un código. 
    
    Dentro de la página se va a poder ver la base de datos de aquello que vamos elaborando. 


    Por qué guardamos los datos en.env ? Cogemos el dato aquí. 
    No se sube a github, porque está toda tu base de datos.


    Todas las variables de entorno de VITE_ comienza así. 
    Son accesibles por toda la aplicación. 

    Hay otro fichero, a parte del api.js que hemos puesto en el service, dentro de la carpeta App. 


    BASE DE DATOS NO RELACIONAL: 

    BASE DE DATOS TRADICIONAL: TIENEN FILAS Y COLUMNAS.Tienes la ID, el Nombre de la persona... Y tienen otra tabla de libros: ID y un title

    Estan relacionadas las dos, pero son dos tablas distintas. 
    Se relacionan a través del id.Clave primaria, es la primera filade la primera tabla, y la otra id que sale en la segunda tabla después del id, table.Se llama id_autor. 

    Colección y Documento.
 
    En el create item vamoos a meter una persona dentro de la colección de persona.
  colRef = conecta con la base de datos.

    colRef: referencia a esa colección.
      obj: hemos parado esta función el objeto como patrámetro de entrada. 
  Esto de createItem es


//ESTO SERÍA CON AXIOS
export const createItem2 = async (obj) => {
  i.post('htpp://www.seerviciodecosas.com/users', obj)
} 
Con la aplciación de springboot. 
Peticiones de consulta. 
En vez de petición de guardar datos, haríamos el post que conectaría con un servidor que hemos creado nosotros, y lo guardaría en la base de datos. 
Tnedríamos que programarlo para que pueda recibir el obj de js y meterlo en la base de datos.


  //Vamos a la APP.
  const[userName, setUserName] = useSate();
return ( 
<input type="text" onChange={(e) => setUserName(e.target.value)}/>

<button onClick={() => createItem ({userName:userName })}>Salvar datos</button>
)
//En el nombre de la propiedad y el estado es el mismo, se puede simplificar poniendo dsolo un uno userName. 
export const createItem = async (obj) => {
//En esta frase, en el obj se puede poner Name, Age, Height, se puede poner lo que queramos, pero si ponemos el parámetro obj no hace falta modificar nada más adelante, dependiendo del valor que queremos recoger. 

For no asíncronas.


  const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
      return { ...doc.data(), id: doc.id };
    });
  }
//Este méotdo coge la colección y te la convierte en un array de objectos.
//Y encima te meta el id. 

CREAR USEEFFECT, CONSULTAR EL METODO GETITEM DEVOLVERA UNA PROMESA CON LAS PERSONAS QUE QUIERO QUE RECORRAIS EN EL JSX CON UN MAP.


    Actualment, el VITE se usa más Nextjs, que es creador de aplicaciones, pero que el router es más similar a una navegación. (Diferencia de uso interno)

  VITE: Unico HTML.
    NextJS: HTML por ruta. 

    Contexto global: Redux: ContextApi.STORE(carpeta dentro del React)
    Views es como nuestras page.

    Una carpeta HOOK: Para sacar lógica de React fuera. 
    Sería como un utils que tiene código de React. 