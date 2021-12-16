import { useReducer, useEffect } from 'react';

const initialState:AuthState = {
    validando: true,
    token: null,
    userName: "",
    nombre: "",
}

const authReducer = ( state:AuthState, action: AuthAction): AuthState => {

    switch(action.type){
        case "logout": 
            return {
                validando: false,
                token: null,
                nombre: "",
                userName: ""
            }

        case "login":

            const { nombre, userName} = action.payload

            return{
                validando: false,
                token: "miClave",
                nombre,
                userName
                // nombre: action.payload.nombre,
                // userName: action.payload.userName
            }

        default:
            return state;
    }
}

interface AuthState {
    validando: boolean,
    token: string | null,
    userName: string,
    nombre: string,
}

type LoginAction = {
    userName:string, 
    nombre:string
}

type AuthAction = 
| {type: "logout"}
| {type: "login", payload: LoginAction}

const Login = () => {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState)

    const login = () => {
        dispatch({
            type:"login", 
            payload:{
                nombre: "Javier",
                userName: "machineW"
            }
        })
    }

    const logout = () =>{
        dispatch({type:"logout"});
    }

    useEffect(()=>{

        setTimeout(()=>{
            logout()
            
        },1500)

    },[])

    if(validando){
        return(
            <>
                <h3>Login</h3>
                <div className='alert alert-info'>
                    validando...
                </div> 
            
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                (token) ? 
                    <div className='alert alert-success'>
                        Autenticado como {nombre}
                    </div>
                :
                    <div className='alert alert-danger'>
                        No esta autenticado
                    </div>
            }
            
            {/* <div className='alert alert-danger'>
                No esta autenticado
            </div> 
            <div className='alert alert-success'>
                Autenticado
            </div>  */}

            {
                (token) ?

                <button onClick={logout} className='btn btn-danger'>
                    Logout
                </button>

                :

                <button onClick={login} className='btn btn-primary'>
                    Login
                </button>
                
            }   

        </>
    )
}

export default Login;