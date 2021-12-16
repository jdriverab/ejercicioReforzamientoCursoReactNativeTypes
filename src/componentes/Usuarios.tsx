import React from 'react'
import { useEffect } from 'react';
import { reqResApi } from '../api/reqRes';

const Usuarios = () => {


    useEffect(()=>{

        // const fetchAsync = async () =>{
        //     const data = await fetch("https://reqres.in/api/users?page=2").then(res=> res.json()).then(data=>{console.log(data)})
        // }

        // fetchAsync()

        reqResApi.get("/users").then(res=>console.log(res.data.data)).catch(console.log)

    },[])

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
                <tr>
                    <td>

                    </td>
                </tr>
            </tbody>
        </table>
            
        </>
    )
}

export default Usuarios
