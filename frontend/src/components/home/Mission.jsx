import React from 'react';
import Img5 from '../../assets/Img5.jpg';

const Mission = () =>{
    return(
        <div className='bg-white p-8 rounded sm:flex sm:flex-col'>
            <div className='sm:h-36 sm:overflow-hidden md:h-36 md:overflow-hidden self-center'>
                <img src={Img5} alt="" className='sm:h-36 sm:w-36' />
            </div>
            <div className='p-4 text-center text-altBlack'>
                <h1 className='font-bold text-lg pb-2'>Mission Statement</h1>
                <span className='text-lg'>Forging strong, long-term relationship with our clients and alliances, to deliver excellent Service quality on good maintenance culture on capital and engineered projects to customers’ requirements, with full commitment to Quality and standards.</span>
            </div>
        </div>
    )
}

export de