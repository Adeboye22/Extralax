import React from 'react';
import Img4 from '../../assets/Img4.jpg';

const Vision = () => {
    return(
        <div className='bg-white p-8 rounded sm:flex sm:flex-col flex flex-col'>
            <div className='sm:h-36 sm:w-36 sm:overflow-hidden md:h-32 md:overflow-hidden self-center'>
                <img src={Img4} alt=""className='sm:h-36 sm:w-36 h-96 w-96' />
            </div>
            <div className='text-center p-4 text-altBlack'>
                <h1 className='font-bold text-lg pb-2'>Vision Statement</h1>
                <span>
                    To provide world class Well Services Operations in the Oil Industry To meet or exceed all applicable legal standards, honour our contractual commitments to customer satisfaction and avoid conflicts of interest
                </span>
            </div>
        </div>
    )
}

export default Vision;