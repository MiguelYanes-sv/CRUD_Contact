import React from 'react';
import ReactDOM from 'react-dom';

/* import Header from './components/header'
import BuscarContactos from './components/BuscarContacto'
import BtnContactos from './components/BtnContacto'
import AgregarContactos from './components/AgregarContacto'
import EditarContactos from './components/EditarContactos'
import {confirmAlert} from 'react-confirmAlert'
import 'react-confirmAlert/src/react-confirmAlert.css' */

/* const App = () =>{
    return(
        <h1>Hola</h1>
    );
}

export default App; */



const App = () => {
    
    const {Name, saveName} = useState('');
    const {LastName, saveLastName} = useState('');
    const {Phone, savePhone} = useState('');
    const {getId, setId} = useState();
    const {getContact, setContact} = useState([]);
    const {getBusqueda, setBusqueda} = useState([]);

    useEffect(() => {
        setContactos(getBusqueda)
    },[])

    const EliminarContacto = () => {
        confirmAlert({
            title:'Confirmar',
            message:'¿Estas seguro que quieres eliminar este contacto?',
            button: [
              {
                  Label:'Si',
                  onClick: () => {
                      let cont = 0;
                      let arreglo = getContact
                      arreglo.forEach((registro) => {
                          if(contacto.id === registro.id){
                              arreglo.spice(cont, 1);
                          }
                          cont++;
                      });

                      let lista = []

                      for (let i=0; i < arreglo.length; i++ ){
                          lista = array.from([...arreglo])
                      }
                      setContact([...lista])
                  }
              },
              {
                  label:'No',
              }
            ]
        });
    }


}

export default App;