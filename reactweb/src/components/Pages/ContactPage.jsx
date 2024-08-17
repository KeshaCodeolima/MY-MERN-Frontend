import React from "react";
import "./ContactPage.css";

function ContactPage (){
    return(
        <>
        <div className="main2">
            <div className="mainleft">
                <div className="leftiteams">
                    <li className="contactlist">Location</li>
                    <p className="p1">151/1 Andagalawaththa Bamunugedara Kurunegala</p>
                    <li className="contactlist">Phone Number</li>
                    <p className="p1">076 5858504</p>
                    <li className="contactlist">Email</li>
                    <p className="p1">keshankulasekara@gmail.com</p>
                </div>
            </div>
            <div className="mainright">
                <div className="box3">
                    <p>Send Message</p>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Enter your Massage" />
                </div>
            </div>
        </div>
        </>
    )
}
export default ContactPage