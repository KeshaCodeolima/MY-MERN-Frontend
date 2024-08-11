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
        if (!password) {
            newErrors.password="Password is Required.";
        }else if(!password.length<6){
            newErrors.password ="Password must be at least 6 characters long."
        }
    }

    const submit = (e)=>{
        e.preventDefault();
        const ValidationsErrors = validation();
        if (Object.keys(ValidationsErrors).length>0) {
            setErrors(ValidationsErrors);
        } else {
            axios.post("http://localhost:3001/register",{name,email,phonenumber,password})
        .then(result=>{console.log(result)
            alert("Register Succesfully")
            navigate('/login')
        })
        .catch(error=>console.log(error))   
        }
    }

    return(
        <>
        <div className='main'>
            <div className='box'>
                <h1>Register</h1>
                <form onSubmit={submit}>

                <input type="text" 
                placeholder='Your Name' 
                onChange={(e)=>setName(e.target.value)}/>
                {errors.name && <p className='errors'>{errors.name}</p>}

                <input type="email" 
                placeholder='Email' 
                onChange={(e)=>setEmail(e.target.value)}/>
                {errors.email && <p className='errors'>{errors.email}</p>}

                <input type="text" 
                placeholder='Phone Number' 
                onChange={(e)=> setPhonenumber(e.target.value)}/>

                <input type="password" 
                placeholder='Password' 
                onChange={(e)=>setPassword(e.target.value)}/>

                <button type='submit'>Register</button>
                <Link to={"/login"} className="span">All Ready Have a Account.(Login)</Link>
                </form>
            </div>
        </div>
        </>
    );
}
export default RegisterPage