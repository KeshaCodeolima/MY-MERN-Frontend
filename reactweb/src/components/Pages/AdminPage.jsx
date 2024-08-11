import React, { useState } from 'react'
import "./LoginAndRegister.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function AdminPage() {

  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [errors, setErrors] =useState('');
  const navigate = useNavigate();

  const validation = ()=>{
    const newErrors = {};
  }

  const login = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:3001/login",{email,password})
      .then(result=>{console.log(result)
        if (result.data === "Succesful Login") {
          navigate("/userdetails")
        }
      })
      .catch(error=>console.log(error))
  }


  return (
      <div className='box'>
        <div className='main'>
          <h1>Admin page</h1>

          <form onSubmit={login}>
            <input type="text" 
            placeholder='Admin Email' 
            onChange={(e)=>setEmail(e.target.value)}/>

            <input type="password" 
            placeholder='Admin Password'  
            onChange={(e)=>setPassword(e.target.value)}/>

            <Link to={'/forgetemail'}>Forget Password</Link>
            <button type= "submit">Login</button>
          </form>
        </div>
      </div>
  )

}

export default AdminPage
