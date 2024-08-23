import React, { useState } from 'react'
import "./LoginAndRegister.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {

  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  const validation = ()=>{
    const newErrors = {};

    if(!email){
      newErrors.email="Username is Required.";
    }else if(!/\S+@\S+\.\S+/.test(email)){
      newErrors.email="USername is Not Valid.";
    }
    if(!password){
      newErrors.password="Password is required.";
    }else if(password.length < 6){
      newErrors.password = "Password is least than 6 characters or more.";
    }
     return newErrors;
  }

  const Notify = () => {
    toast.success("Login Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose:()=>navigate('/')
    });
  };

  const NotifyInfo = () => {
    toast.info("Email OR Password Incorrect", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
  };

  const login = (e)=>{
      e.preventDefault();
      const ValidationErrors = validation();
      if (Object.keys(ValidationErrors).length>0) {
        setErrors(ValidationErrors);
      } else {
        axios.post("http://localhost:3001/login",{email,password})
      .then(result=>{console.log(result)
        if (result.data === "Succesful Login") {
          console.log(result)
          Notify();
        }else{
          NotifyInfo();
        }
      })
      .catch(err=>console.log(err)) 
      }
  }


  return (
    <div>
      <div className='box'>
        <div className='main'>
          <h1>Login page</h1>

          <form onSubmit={login}>
            <input type="text" 
            placeholder='Email' 
            onChange={(e)=>setEmail(e.target.value)}/>
            {errors.email && <p className='errors'>{errors.email}</p>}

            <input type="password" 
            placeholder='Password'  
            onChange={(e)=>setPassword(e.target.value)}/>
            {errors.password && <p className='errors'>{errors.password}</p>}

            <Link to={'/forgetemail'}>Forget Password</Link>
            <button type= "submit">Login</button>
            <div className="link">
              <Link to={'/register'}>Register</Link>
              <Link to={'/admin'}>Login As Admin</Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default LoginPage
