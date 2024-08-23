import {useState,useEffect} from "react";
import './AboutPage.css';
import { Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';

function AboutPage(){

    const images = [
        require('../../Image/IBG5.jpg'),
        require('../../Image/IBG6.jpg'),
        require('../../Image/IBG7.jpg')
      ];

    return(
        <>
        <div className="slider">
            <div className="boxborder">
                <img src={images[currentIndex]} alt="slider" className="slider-image" />
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