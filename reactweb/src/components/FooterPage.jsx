import React from "react";
import "./FooterPage.css";
import {FaHome,FaPhone,FaEnvelope,FaUser,FaFacebook,FaGithub,FaYoutube,FaInstagram} from "react-icons/fa";
function FooterPage(){
    return(
        <>
        <footer className="footermain">
            <div className="footerleft">
                <ul>
                    <li className="list"><FaHome className="Home"/>151/1 Andagalawaththa Bamunugedara Kurunegala</li>
                    <li className="list"><FaPhone className="Home"/>0765858504</li>
                    <li className="list"><FaEnvelope className="Home"/>keshankucodeolima@gmail.com</li>
                    <li className="list"><FaUser className="Home"/>Keshan Kulasekara</li>
                </ul>
            </div>
            <div className="footerright">
                <ul>
                    <li>Software Engineer Full Stack Developer</li>
                    <li className="text"> I'm a software engineering undergraduate student in IIT, I specialize in creating clean, efficient code, seamless user experiences that blend cutting-edge technology with user-centric design, I am Passionate for Full Stack Development.</li>
                    <li><FaFacebook className="Icons"/><FaYoutube className="Icons"/><FaGithub className="Icons"/><FaInstagram className="Icons"/></li>
                </ul>
            </div>
        </footer>
        </>
    )
}
export default FooterPage