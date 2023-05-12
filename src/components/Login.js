import { useDispatch } from "react-redux"
import { login, logout } from "../features/user"

const Login = () => {
    const dispatch =useDispatch()
  return (
    <div>
       
        
        <button 
            onClick={()=> {
                dispatch(login( {name:"aaa", age:0, email:"ee@gmail.com", mobile:"234"}))}}>Login</button>

        <button onClick={()=>{
            dispatch(logout( ) )
        }}> Logout</button>
    </div>
  )
}

export default Login