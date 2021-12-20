import React from 'react';
import useUsuarios from "../hooks/useUsuarios";
import { Usuario } from '../interfaces/reqRes';

const Usuarios = () => {

    const {infoUsuarios, paginaAnterior, paginaSiguiente, paginaRef} = useUsuarios();

    const renderItem = (infoUsuario:Usuario) => {

        return(
            <tr key={infoUsuario.id.toString()}>
                <td>
                    {/* Avatar */}
                    <img src={infoUsuario.avatar} alt="" style={{width:50, borderRadius:100}}/>
                </td>
                <td>
                    {/* Nombre */}
                    {infoUsuario.first_name} {infoUsuario.last_name}
                </td>
                <td>
                    {/* Correo */}
                    {infoUsuario.email}
                </td>
            </tr>
        )
    }

    return (
        <>

            <h3>Usuarios</h3>

            <table className='table'>
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {infoUsuarios.map(renderItem)}
                    
                </tbody>
            </table>

            <button className='btn btn-primary' onClick={paginaAnterior}>Anteriores</button>
            &nbsp;
            <span>{paginaRef.current}</span>
            &nbsp;
            <button className='btn btn-primary' onClick={paginaSiguiente}>Siguientes</button>
            
        </>
    )
}

export default Usuarios
