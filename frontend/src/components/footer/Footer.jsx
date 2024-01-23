import React from 'react';

const Footer = () => {
    return (
        <div>
            <hr className='text-white ' />
        <div className='sm:flex sm:flex-col sm:gap-16 sm:p-12 bg-green text-footColor p-8 flex flex-row gap-48'>
            {/* Location */}
            <div className='pb-4'>      
                <h1 className='text-xl font-bold pb-2'>Office Location:</h1>
                <span className='text-lg justify-center'>No.1 Ericsson Arubayi close, Golden Kite bus-stop, off Refinery road, Effurun, Warri city, Delta state.</span>
            </div>
            <div>
                <h1 className='text-xl font-bold pb-2'>Contact Us:</h1>
                <span className='text-lg'><strong>Telephone numbers:</strong> +234-8054223329; +234-8122856468</span><br/>
                <span className='text-lg'><strong>Email:</strong> contact@extralax.com.ng</span>
            </div>
        </div>
        </div>
    )
}

export default Footer