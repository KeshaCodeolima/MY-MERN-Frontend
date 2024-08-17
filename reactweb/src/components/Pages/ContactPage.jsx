import React from "react";
import "./ContactPage.css";
import { FaMapLocation,FaPhone,FaEnvelope } from "react-icons/fa6";

function ContactPage (){
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
                        <p  className="p2">Send Message</p>
                        <input type="text" placeholder="Full Name" className="inputsmassage"/>
                        <input type="email" placeholder="Email" className="inputsmassage"/>
                        <input type="text" placeholder="Enter your Massage" className="inputsmassage1"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ContactPage