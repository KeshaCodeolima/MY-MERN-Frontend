import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom'
import axios from 'axios';

function ForgetPage() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:3001/update-password', {email,newPassword,});

      if (result.data === "Password Update Successfully") {
        alert('Password Update Successfully');
        navigate('/login');
      }else{
        alert('Email Address Incorrect')
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="box">
      <div className="main">
        <h1>Forget Password</h1>
        <form onSubmit={submit}>
          <input type="text" placeholder="Email"onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} />
          <button type="submit">OK</button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPage;
