import React from 'react';
import Img2 from '../../assets/Img2.jpg';
import Img3 from '../../assets/Img3.jpg';
import Img4 from '../../assets/Img4.jpg';
import Img6 from '../../assets/Img6.jpg';

const Services = () => {
    return (
        <div className='sm:px-8 flex flex-col gap-12 bg-white text-lg text-altBlack'>
            <section className='pt-8 text-justify'>
                <span>
                    <strong>EXTRALAX NIGERIA LIMITED</strong> tends to provide “turn-key" solutions to clients’ needs supported by an array of current project management, engineering design and construction support/installation services.
                </span>
            </section>
            <section>
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
            <section className='flex flex-col gap-8 pb-12'>
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
                <img src={Img4} alt="" />
                <img src={Img6} alt="" />
            </section>
        </div>
    )
}

export default Services;