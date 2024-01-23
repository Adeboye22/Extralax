import React, { useEffect } from 'react';
import Img1 from '../../assets/Img1.png';
import Logo from '../../assets/Logo.png';
import AOS from 'aos';

const Hero = () => {
    // this hook runs the animation on the page
    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <div className=''>
            <div className='bg-green w-full h-56' data-aos="zoom-in" data-aos-duration="1500">
                <img src={Img1} alt="" className='opacity-30 w-full h-56 object-cover'/>
            </div>
        </div>
    )
}

export default Hero;