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

    if (!email) {
      newErrors.email = "Email is Required.";
    }else if(!/\S+@\S+\.\S+/.test(email)){
      newErrors.email="Email is Not Valid.";
    }
    if (!password) {
      newErrors.password="Password is Required.";
    }else if(password.length > 6 ){
      newErrors.password = "Password is least than 6 characters or more."
    }
    return newErrors;
  }

  const login = (e)=>{
      e.preventDefault();
      const ValidationsErrors = validation();

      if (Object.keys(ValidationsErrors).length>0) {
        setErrors(ValidationsErrors);
      } else {
        axios.post("http://localhost:3001/login",{email,password})
      .then(result=>{console.log(result)
        if (result.data === "Succesful Login") {
          navigate("/userdetails")
        }
      })
      .catch(error=>console.log(error)) 
      }
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
