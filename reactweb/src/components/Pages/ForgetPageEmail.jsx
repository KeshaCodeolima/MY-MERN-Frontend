import axios from "axios";
import { useState } from "react";


function ForgetPageEmail(){
    const[email,setEmail]=useState('')

    const submit = async(e)=>{
        e.preventDefault();
        try {
            const result= await axios.post("http://localhost:3001/sendemail",{email});
            if (result.data==="Email send Successfully") {
                alert('Email Sent Successfully')
            }else{
                alert('Email Address Not Found')
            }
        } catch (error) {
            alert(error);
        }

    }
    return(
        <>
        <div className="box">
        <div className="main">
            <h1>Enter Email to Add NewPassword</h1>
            <form onSubmit={submit}>
            <input type="text" placeholder="Email"onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit">OK</button>
            </form>
        </div>
        </div>
        </>
    );
}
export default ForgetPageEmail