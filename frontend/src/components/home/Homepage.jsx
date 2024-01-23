import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import AOS from 'aos';
import Vision from './Vision';
import Mission from './Mission';

const Homepage = () => {
    const navigate = useNavigate();

    // this hook initializes the animate on scroll library
    useEffect(() => {
        AOS.init();
    }, []);

    // this button re-directs users to the services page
    const services = () => {
        return(
            navigate('/services')
        )
    }

    return (
        <div>
            <main className='flex flex-col gap-8'>
                <section>
                    <div>
                        <Hero/>
                    </div>
                </section>
                <section data-aos='fade-up' className='sm:px-8'>
                    <div className='sm:pb-4 text-altBlack pb-12 px-4'>
                        <h1 className='sm:pb-8 sm:font-bold md:text-3xl md:pb-8 md:font-bold text-3xl pb-8'>Welcome To Extralax Nigeria Limited</h1>
                        <span className='sm:text-xl md:text-lg'>EXTRALAX NIGERIA LIMITED is a wholly indigenous oil service company, committed to delivering innovative and reliable solutions to meet the diverse needs of the energy sector. With a focus on excellence, safety, and sustainability, we offer a comprehensive suite of services, including well head servicing, wireline operations, and HVAC (Heating, Ventilation, and Air Conditioning) solutions.</span>
                    </div>
                    <div className='sm:pb-4 text-altBlack pb-8 px-4'>
                        <h1 className='sm:pb-8 sm:font-bold md:text-3xl md:pb-8 md:font-bold text-3xl pb-8'>Our Uniqueness</h1>
                        <ul>
                            <li>
                                Innovation and Technology:
                                We leverage the latest technologies and industry best practices to deliver innovative solutions that improve efficiency, reduce downtime, and enhance overall performance.
                            </li>
                            <li>
                                Safety and Environmental Stewardship:
                                Horizon Energy Solutions prioritizes the safety of our personnel and the environments in which we operate. Our commitment to environmental stewardship is reflected in sustainable practices throughout our operations.
                            </li>
                            <li>
                                Global Presence:
                                With a global reach, we serve clients in diverse geographical locations. Our international presence allows us to adapt to local needs while maintaining consistent quality and reliability.
                            </li>
                            <li>
                                Customer-Centric Approach:
                                We understand the unique challenges of our clients and are dedicated to providing tailored solutions that meet their specific requirements. Our customer-centric approach fosters strong, long-term partnerships.
                            </li>
                        </ul>
                    </div>
                    <div className='text-altBlack py-12 px-4 flex flex-col'>
                        <button onClick={services} className='sm:p-2 sm:bg-orange sm:border sm:rounded sm:text-sm border rounded p-2 bg-orange self-center'>Our Services</button>
                    </div>
                </section>
                <section className='sm:flex sm:flex-col md:flex md:flex-col flex flex-row gap-14 bg-green p-8 pb-24'>
                    <div>
                        <Vision/>
                    </div>
                    <div>
                        <Mission/>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Homepage;