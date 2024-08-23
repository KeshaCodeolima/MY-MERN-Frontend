import React from "react";
import './AboutPage.css';

function AboutPage(){

    const images = [Image1,Image2,Image3];

      const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [images.length]);

    return(
        <>
        <div className="slide-container">
            <Zoom {...zoomOutProperties}>
                {
                    images.map((each,index)=><img key={index} style={{width:"100%",height:"66vh",borderRadius:"20px"}} src={each} alt="Picter"/>)
                }
            </Zoom>
        </div>
        <div className="abouttext">
            <div className="aboutboxtext">
                <p>Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.</p>
            </div>
            <div className="aboutboxtext">
                <p>Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.</p>
            </div>
            <div className="aboutboxtext">
                <p>Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.</p>
            </div>
            <div className="aboutboxtext">
                <p>Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.</p>
            </div>
            <div className="aboutboxtext">
                <p>Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.</p>
            </div>
            <div className="aboutboxtext">
                <p>Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.</p>
            </div>
            <div className="aboutboxtext">
                <p>Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.Sri Lanka, a tropical paradise in the Indian Ocean, offers diverse tourism experiences. Known for its stunning beaches, lush tea plantations, and ancient ruins, the island caters to all kinds of travelers. Visitors can explore the cultural heritage in cities like Kandy and Sigiriya, enjoy wildlife safaris in national parks like Yala and Udawalawe, or relax on the golden shores of places like Mirissa and Unawatuna. The island's rich biodiversity includes leopards, elephants, and colorful marine life. With its warm hospitality, vibrant festivals, and exquisite cuisine, Sri Lanka promises an unforgettable adventure.</p>
            </div>
        </div>
        </>
    )
}
export default AboutPage