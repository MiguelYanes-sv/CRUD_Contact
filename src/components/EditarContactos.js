import React, { useState } from "react";

const AgregarContactos = ({Name, saveName, LastName, saveLastName, Phone, savePhone, getContact, setContact, getId, setId}) => {
   
    const {error, guardarError} = useState(false);
    const {contactoEditado, setContactoEditado} = useState(false);

    const datosContactoEditar = {
        nombre: Name,
        apellido: LastName,
        telefono: Phone
    }

    const guardarDatos = (e) => {
        e.preventDefault()

        if (datosContactoEditar.Name === '' || datosContactoEditar.LastName === '' || datosContactoEditar.Phone === ''){
            guardarError(True);
            return;
        }else{
            guardarError(false);
            let cont = 0;
            let contactoEditar = getContact
            contactoEditar.forEach((datosContacto) => {
                if (id === datosContacto.id) {
                    contactoEditar[cont].nombre = Name
                    contactoEditar[cont].apellido = LastName
                    contactoEditar[cont].telefono = Phone
                }
                cont++;
            });
            
            let listaContactoEditado = []
            for (let i=0; i < contactoEditar.length; i++ ){
                listaContactoEditado = Array.from([...contactoEditar])
            }
            setContact([...listaContactoEditado])
            setContactoEditado(True)
            eliminarAlerta()
        }
    }

    const limpiarInput = () =>{
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('telefono').value = '';
        saveName('')
        saveLastName('')
        savePhone('')
    }

    const alertaContactoAgregado = () =>{
        return(
            <div className='col-lg-12 mt-3 alerta-add'>
                <div className='alert alert-success' role='alert'>
                    <h4 className='alert-heading'>¡Contacto agregado correctamente!</h4>
                </div>
            </div>
        );
    }

    const eliminarAlerta = () =>{
        setTimeout(() => {
            setContactoGuardado(False)
        },2000);
    }

    return (
        <div className='col-lg-12'>
            <div className='modal fade' id='abrir-modal' tabIndex='1' role='dialog'
                aria-labelledby='examleModalCenterTitle' aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='examleModalLongTitle'>Agregar Nuevo Contacto</h5>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <form onSubmit={guardarDatos}>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='nombre'
                                            placeholder='Nombre'
                                            onChange={e => saveName(e.target.value)} />
                                    </div>

                                    <div className='col-lg-6'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='apellido'
                                            placeholder='Apellido'
                                            onChange={e => saveLastName(e.target.value)} />
                                    </div>

                                    <div className='col-lg-6'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='telefono'
                                            placeholder='telefono'
                                            onChange={e => savePhone(e.target.value)} />
                                    </div>
                                    <div className='col-lg-12 mt-3 modal-footer'>
                                        <button type='button' className='btn btn-danger' data-dismiss='modal' onClick={limpiarInput}></button>
                                        <button type='submit' className='btn btn-primary'>Guardar Contacto</button>
                                    </div>
                                    {(error) ?
                                        <div className='col-lg-12 mt-3'>
                                            <div className='alert alert-danger'>
                                                <a href="." className='close' data-dismiss='alert' aria-label='close'>&times;</a>
                                                <strong>¡Error!</strong>Todos los campos son obligatorios
                                            </div>
                                        </div>
                                    : ''}

                                    {(contactoGuardado) ?
                                        alertaContactoAgregado()
                                    :''}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgregarContactos;