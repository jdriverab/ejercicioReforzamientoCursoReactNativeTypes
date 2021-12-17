
import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


const useUsuarios = () => {

    const [infoUsuarios, setInfoUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1)

    

    const cargarUsuarios = async() => {
        const resp = await reqResApi.get<ReqResListado>("/users", {
            params:{
                page: paginaRef.current
            }
        })
        if(resp.data.data.length > 0){
            setInfoUsuarios(resp.data.data)
            paginaRef.current ++
        } else {
            alert("no hay mas registros")
        }
        
    }
    
    useEffect(()=>{

        // const fetchAsync = async () =>{
        //     const data = await fetch("https://reqres.in/api/users?page=2").then(res=> res.json()).then(data=>{console.log(data)})
        // }

        // fetchAsync()

        cargarUsuarios();
        
    },[])

    return {
        infoUsuarios,
        cargarUsuarios
    }
}

export default useUsuarios
