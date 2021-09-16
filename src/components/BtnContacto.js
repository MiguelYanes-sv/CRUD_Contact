import React from "react";

const BtnContact = () => {
   return(
       <div className='col-lg-3 mt-3 mb-3'>
           <div className='agregar-contacto'>
               <a href="." className='btn-agregar' data-toggle='modal' data-target='#brir-modal'>
                   <i className='fa fa-plus-circle pr-2'> Agregar Nuevo Contacto</i>
               </a>
           </div>
       </div>
   );
}

export default BtnContact;