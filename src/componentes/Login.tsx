import { useReducer } from 'react';

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

type AuthAction = {
    type: "logout",
    payload: ""
}

const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    return (
        <>
            <h3>Login</h3>
            <div className='alert alert-info'>
                validando...
            </div> 
            <div className='alert alert-danger'>
                No esta autenticado
            </div> 
            <div className='alert alert-success'>
                Autenticado
            </div> 

            <button className='btn btn-primary'>
                Login
            </button>

            
            <button className='btn btn-danger'>
                Logout
            </button>

        </>
    )
}

export default Login;