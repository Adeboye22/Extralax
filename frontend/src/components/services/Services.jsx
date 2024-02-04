import React from 'react';
import Img2 from '../../assets/Img2.jpg';
import Img3 from '../../assets/Img3.jpg';
import Img4 from '../../assets/Img4.jpg';
import Img6 from '../../assets/Img6.jpg';

const Services = () => {
    return (
        <div className='sm:px-8 px-8 flex flex-col gap-12 bg-white text-xl text-altBlack'>
            <section className='flex bg-green rounded'>
                <img src={Img2} alt="" className='sm:h-56 sm:w-full  opacity-60 h-72 w-full object-cover'/>
            </section>
            <section className='text-left'>
                <span>
                    <strong>EXTRALAX NIGERIA LIMITED</strong> tends to provide “turn-key" solutions to clients’ needs supported by an array of current project management, engineering design and construction support/installation services.
                </span>
            </section>
            <section className='sm:py-8 py-8 flex self-center'>     
                <img src={Img3} alt="" />
            </section>
            <section className='text-left'>
                <p>We offer the following comprehensive services:</p>
                <ul className=' pt-4 flex flex-col gap-4'>
                    <li>- Servicing of Oil well head</li>
                    <li>- Construction/Constructing support</li>
                    <li>- Wireline Operation</li>
                    <li>- Plant Operations and maintenance management</li>
                    <li>- HVAC repairs and installation</li>
                    <li>- Mechanical works, supply of industrial materials</li>
                    <li>- Supply of marine equipments</li>
                    <li>- Project management.</li>
                </ul>
            </section>
            <section className='sm:flex sm:flex-col sm:gap-8 flex flex-row gap-8 pb-12 self-center'>
                <img src={Img4} alt="" className='h-96'/>
                <img src={Img6} alt="" className='h-96'/>
            </section>
        </div>
    )
}

export default Services;