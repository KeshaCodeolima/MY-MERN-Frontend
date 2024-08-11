import React, { useState } from 'react'
import "./LoginAndRegister.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function LoginPage() {

  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();


  const login = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:3001/login",{email,password})
      .then(result=>{console.log(result)
        if (result.data === "Succesful Login") {
          console.log(result)
          alert("Login Successfuly")
          navigate("/")
        }else{
          alert("Email OR Password Incorrect")
        }
      })
      .catch(err=>console.log(err))
  }


  return (
      <div className='box'>
        <div className='main'>
          <h1>Login page</h1>
          <form onSubmit={login}>
            <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>
            <Link to={'/forgetemail'}>Forget Password</Link>
            <button type= "submit">Login</button>
            <Link to={'/register'}>Register</Link>
            <Link to={'/admin'} className='admin'>Login As Admin</Link>
          </form>
        </div>
      </div>
  )
}

export default LoginPage
