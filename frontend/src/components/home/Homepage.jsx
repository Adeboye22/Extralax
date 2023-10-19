import React, { useEffect } from 'react';
import Hero from './Hero';
import AOS from 'aos';
import Vision from './Vision';
import Mission from './Mission';

const Homepage = () => {

    // this hook initializes the animate on scroll library
    useEffect(() => {
        AOS.init();
    }, []);

    // 
    const readAbout = () => {

    }
    return (
        <div>
            <main className='flex flex-col gap-8'>
                <section>
                    <div>
                        <Hero/>
                    </div>
                </section>
                <section data-aos='fade-up' >
                    <div className='sm:p-3 md:p-4 text-altBlack'>
                        <h1 className=' sm:pb-6 sm:font-bold md:text-3xl md:pb-6 md:font-bold'>Welcome to Extralax Nigeria Limited</h1>
                        <span className='sm:text-justify md:text-justify sm:text-xl md:text-lg'>EXTRALAX NIGERIA LIMITED is a wholly indigenous oil service company with strong capabilities in Oil Wellhead Maintenance and Wire Line Services. We provide our clients the supplementary resources required to enhance its efforts necessary to undertake a wide range of projects.</span>
                    </div>
                    <div className='px-3 text-altBlack'>
                        <button onClick={readAbout} className='sm:p-2 sm:bg-orange sm:border sm:rounded sm:text-sm'>Read More</button>
                    </div>
                </section>
                <section className='sm:flex sm:flex-col md:flex md:flex-col gap-14 bg-green p-8'>
                    <div>
                        <Vision/>
                    </div>
                    <div>
                        <Mission/>
                    </div>
                </section>
            </main>