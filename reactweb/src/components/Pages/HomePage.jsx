import React from 'react';
import './HomePage.css';
import Image1 from '../../Image/SUIBG1.jpg';
import Image2 from '../../Image/IBG5.jpg';
import Image3 from '../../Image/IBG6.jpg';
import Image4 from '../../Image/IBG7.jpg';


function HomePage(){
    return(
        <>
        <div>
            <h1>WELCOME To Sri Lanka</h1>
        </div>

        <div className='subimg1'>
           <img src={Image1}  alt='Background' className='IMG'/>
           <img src={Image2}  alt='Background' className='IMG'/>
           <img src={Image3}  alt='Background' className='IMG'/>
           <img src={Image4}  alt='Background' className='IMG'/>
        </div>
        </>
    );
}
export default HomePage