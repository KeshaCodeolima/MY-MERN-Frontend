import React from "react";
import './AboutPage.css';
import Image1 from "../../Image/IBG5.jpg";
import Image2 from "../../Image/IBG6.jpg";

function AboutPage(){
    return(
        <>
        <div className="abouttext">
            <div className="aboutboxtext">
                <p>Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.</p>
            </div>
            <div className="image1">
                <img src={Image1} alt="" className="img1" />
            </div>
            <div className="image2">
            <img src={Image2} alt="" className="img2" />
            </div>
        </div>
        </>
    )
}
export default AboutPage