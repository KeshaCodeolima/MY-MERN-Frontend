import React from "react";

function ContactPage (){
    return(
        <>
        <div className="main1">
            <div className="mainleft">
                <div className="leftiteams">
                    <li>Location</li>
                    <p>151/1 Andagalawaththa Bamunugedara Kurunegala</p>
                    <li>Phone Number</li>
                    <p>076 5858504</p>
                    <li>Email</li>
                    <p>keshankulasekara@gmail.com</p>
                </div>
            </div>
            <div className="mainright">
                <div className="box1">
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