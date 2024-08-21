import {useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./ContactPage.css";
import { FaMapLocation,FaPhone,FaEnvelope } from "react-icons/fa6";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactPage (){

    const [formData,setForm]=useState({
        user_name:'',
        user_email:'',
        message:'',
    })

    const[error,setError]=useState({
        user_name:'',
        user_email:'',
        message:'',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
          ...formData, // Spread the existing form data
          [name]: value, // Update the specific field
        });
      };

    const validation = ()=>{
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!formData.user_name){
            newErrors.user_name = "Name is Requied."
        }
        if(!formData.user_email){
            newErrors.user_email = "Email is Requied"
        }else if(! emailRegex.test(formData.user_email)){
            newErrors.user_email = "Email is not valid."
        }
        if(!formData.message){
            newErrors.message ="Message is Requied."
        }
        return newErrors;
    }

    const form = useRef();

    const submit= async(e)=>{
        e.preventDefault();
        const ValidationErrors = validation();
        if (Object.keys(ValidationErrors).length > 0) {
            setError(ValidationErrors)
        } else {
            emailjs
          .sendForm('service_oy4at6h', 'template_xw6se89', form.current,'6B8ivzkQOW-eECsqa')
          .then(
            () => {
                Notify();
              console.log("Successfully")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        }
    }
    const Notify = () => toast.success("Thank Your. Your Email Send Successfully.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    return(
        <>
        <div className="main2">
            <div className="mainleft">
                <div className="leftiteams">
                    <li className="contactlist"><FaMapLocation className="Icons1"/>Location</li>
                    <p className="p1">151/1 Andagalawaththa Bamunugedara Kurunegala</p>
                    <li className="contactlist"> <FaPhone className="Icons1"/>Phone Number</li>
                    <p className="p1">076 5858504</p>
                    <li className="contactlist"><FaEnvelope className="Icons1"/>Email</li>
                    <p className="p1">keshankulasekara@gmail.com</p>
                </div>
            </div>
            <div className="mainright">
                <div className="box3">
                    <div className="boxpadding">
                        <form ref={form} onSubmit={submit}>
                            <p  className="p2">Send Message</p>

                            <input type="text" 
                            name="user_name" 
                            placeholder="Full Name" 
                            className="inputsmassage"
                            onChange={handleInputChange}
                            value={formData.user_name}/>
                            {error.user_name && <p className='errors'>{error.user_name}</p>}

                            <input type="email" 
                            name="user_email" 
                            placeholder="Email" 
                            className="inputsmassage"
                            onChange={handleInputChange}
                            value={formData.user_email}/>
                            {error.user_email && <p className='errors'>{error.user_email}</p>}

                            <textarea name="message" 
                            placeholder="Write the Message" 
                            className="inputsmassage1"
                            onChange={handleInputChange}
                            value={formData.message}/>
                            {error.message && <p className='errors'>{error.message}</p>}

                            <button type="submit" className="button">Send</button>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
        </>
    )
}
export default ContactPage