import React, { useState } from 'react'
import "./LoginAndRegister.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    }else if(password.length < 6 ){
      newErrors.password = "Password is least than 6 characters or more."
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
        onClose:()=>navigate('/userdetails')
    });
  };
  const NotifyInfo = () => {
    toast.info("Your Email is Incorrect to Login", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
  };
  const NotifyInfo1 = () => {
    toast.info("Email OR Password Incorrect", {
        position: "top-center",
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
      const ValidationsErrors = validation();

      if (Object.keys(ValidationsErrors).length>0) {
        setErrors(ValidationsErrors);
      } else {
        axios.post("http://localhost:3001/adminlogin",{email,password})
      .then(result=>{console.log(result)

        if (result.data === "Succesful Login") {
          Notify();

        }else if (result.data === "Invalid Email Input"){
          NotifyInfo()

        }else if (result.data === "login Error"){
          NotifyInfo1();
        }
      })
      .catch(error=>console.log(error)) 
      }
  }
  return (
    <div>
      <div className='box'>
        <div className='main'>
          <h1>Admin page</h1>

          <form onSubmit={login}>
            <input type="text" 
            placeholder='Admin Email' 
            onChange={(e)=>setEmail(e.target.value)}/>
            {errors.email && <p className='errors'>{errors.email}</p>}

            <input type="password" 
            placeholder='Admin Password'  
            onChange={(e)=>setPassword(e.target.value)}/>
            {errors.password && <p className='errors'>{errors.password}</p>}

            <div className="link">
              <Link to={'/forgetemail'}>Forget Password</Link>
              <Link to={'/login'}>Login Page</Link>
            </div>
            <button type= "submit">Login</button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )

}

export default AdminPage
