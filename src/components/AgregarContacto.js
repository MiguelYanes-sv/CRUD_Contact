import React, { useState } from "react";

const AgregarContactos = ({Name, saveName, LastName, saveLastName, Phone, savePhone, getContact, setContact}) => {
   
    const {error, guardarError} = useState(false);
    const {contactoGuardado, setContactoGuardado} = useState(false);

    const guardarDatos = (e) => {
        e.preventDefault()

        if (Name === '' || LastName === '' || Phone === ''){
            guardarError(True);
            return;
        }else{
            guardarError(false);
            let lista = []
            for (let i=0; i < getContact.length; i++ ){
                lista = Array.from([...getContact])
            }
            setContact([...lista], {
                id: getContact.length + 1,
                nombre: Name,
                apellido: LastName,
                telefono: Phone,
            })
            setContactoGuardado(True)
            limpiarInput()
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