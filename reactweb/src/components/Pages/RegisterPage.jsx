import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';



function RegisterPage (){

    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [phonenumber, setPhonenumber]= useState('');
    const [password, setPassword]= useState('');
    const [errors,setErrors]=useState('');
    const navigate = useNavigate();

    const validation=()=>{
        const newErrors={};
        if (!name) {
            newErrors.name = "Name is Required.";
        }
        if (!email) {
            newErrors.email ="Email is Required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email ="Email is Not Valid.";
        }
        if (!phonenumber) {
            newErrors.phonenumber="Phone Number is Required.";
        } else if(!/^\d{10}$/.test(phonenumber)){
            newErrors.phonenumber="Must Be 10 Numbers.";
        }
    }

    const submit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/register",{name,email,phonenumber,password})
        .then(result=>{console.log(result)
            navigate('/login')
        })
        .catch(error=>console.log(error))
    }

    return(
        <>
        <div className='main'>
            <div className='box'>
                <h1>Register</h1>
                <form onSubmit={submit}>
                <input type="text" placeholder='Your Name' onChange={(e)=>setName(e.target.value)}/>
                <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder='Phone Number' onChange={(e)=> setPhonenumber(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>

                <button type='submit'>Register</button>
                <Link to={"/login"} className="span">All Ready Have a Account.(Login)</Link>
                </form>
            </div>
        </div>
        </>
    );
}
export default RegisterPage