import React from "react";

const BuscarContacto = ({setBusqueda}) => {

    const guardarBusqueda = (e) => {
        e.preventDefault()
        setBusqueda(e.target.value)
    }

   return(
       <div className='col-lg-4 mt-3 mb-3'>
           <form className='form-search' onChange={guardarBusqueda}>
                <i className='fa fa-search'></i>
                <input type="text" placeholder='Buscar Contacto' id='campo-buscar'/>
           </form>
       </div>
   );
}

export default BuscarContacto;