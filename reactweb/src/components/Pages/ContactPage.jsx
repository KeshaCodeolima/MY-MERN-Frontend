import {useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./ContactPage.css";
import { FaMapLocation,FaPhone,FaEnvelope } from "react-icons/fa6";

function ContactPage (){

    const [formData,setform]=useState({
        user_name:'',
        user_email:'',
        message:'',
    })

    const[error,setError]=useState({
        user_name:'',
        user_email:'',
        message:'',
    })

    const validation = ()=>{
        const newErrors = {};

        if(!formData.user_name){
            newErrors.user_name = "Name is Requied."
        }
    }

    const form = useRef();

    const submit= async(e)=>{
        e.preventDefault();
        emailjs
          .sendForm('service_oy4at6h', 'template_xw6se89', form.current,'6B8ivzkQOW-eECsqa')
          .then(
            () => {
              alert("Thank Your. Your Email send Successfully");
            },
            (error) => {
                alert("Your Email is not send.")
              console.log('FAILED...', error.text);
            },
          );
    }

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
                            <input type="text" name="user_name" placeholder="Full Name" className="inputsmassage"/>
                            <input type="email" name="user_email" placeholder="Email" className="inputsmassage"/>
                            <textarea name="message" placeholder="Write the Message" className="inputsmassage1"></textarea>
                            <button type="submit" className="button">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ContactPage