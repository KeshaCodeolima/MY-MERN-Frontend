import React from "react";
import './AboutPage.css';
import Image1 from "../../Image/IBG5.jpg";
import Image2 from "../../Image/IBG6.jpg";

function AboutPage(){
    return(
        <>
        <div className="imageslider">
            <div className="imageslidershow">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />

                <div className="Image1">
                    <img src={Image1} alt=""/>
                </div>
                <div className="Image">
                    <img src={Image2} alt=""/>
                </div>
                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </div>
            </div>
        </div>
        <div className="abouttext">
            <div className="aboutboxtext">
                <p>Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.</p>
            </div>
        </div>
        </>
    )
}
export default AboutPage