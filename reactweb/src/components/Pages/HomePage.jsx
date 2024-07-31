import React from 'react';
import Image from '../../Image/SUIBG1.jpg';


function HomePage(){
    return(
        <>
        <div>
            <h1>WELCOME</h1>
            <h2>SRI LANKA</h2>
        </div>

        <div className='subimg1'>
           <img src={Image}  alt='Background' className='IMG'/>
        </div>
        </>
    );
}
export default HomePage