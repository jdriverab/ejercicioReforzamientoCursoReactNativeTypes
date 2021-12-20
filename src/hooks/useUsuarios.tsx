
import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


const useUsuarios = () => {

    const [infoUsuarios, setInfoUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1)
    const paginaTotal = useRef(0)

    // console.log(typeof(paginaTotal.current))

    const paginaAnterior = ()=> {
        if(paginaRef.current > 1){
            paginaRef.current --
            cargarUsuarios()
        }else{
            console.log("no podes menos")
        }
    }

    const paginaSiguiente = ()=> {
        if(paginaRef.current < paginaTotal.current){
            paginaRef.current ++
            cargarUsuarios()
        }else{
            console.log("no podes mas")
        }
    }

    const cargarUsuarios = async() => {
        const resp = await reqResApi.get<ReqResListado>("/users", {
            params:{
                page: paginaRef.current
            }
        })
        if(resp.data.data.length > 0){
            setInfoUsuarios(resp.data.data)
            paginaTotal.current = resp.data.total_pages
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
        paginaRef,
        paginaAnterior, 
        paginaSiguiente
    }
}

export default useUsuarios
