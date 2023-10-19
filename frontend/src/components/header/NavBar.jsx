import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Icon from '../../assets/Icon.png';
import Logo from '../../assets/Logo.png';

const NavLinks = () => {
    return (
        <div>
            <nav className='sm:flex sm:flex-col sm:justify-center sm:w-screen sm:h-60 sm:justify-center md:justify-center md:flex md:w-screen md:h-60 md:text-xl flex flex-row justify-between bg-orange h-24'>
                <img src={Logo} alt="" className='sm:hidden md:hidden h-56 w-56 mx-8 -mt-16 '/>
                <ul className='md:flex-col md:text-center text-green flex flex-row gap-0 mx-20 my-8 text-altBlack'>
                    <li className='sm:bg-white'><NavLink to="/">Home</NavLink></li>
                    <li className='sm:bg-white'><NavLink to="services">Services</NavLink></li>
                    <li><NavLink to="about">About Us</NavLink></li>
                    <li><NavLink to="contact">Contact Us</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    

    // function to toggle navbar
    const toggleBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div className='sm:hidden md:hidden'>
                <NavLinks/>
            </div>
            <div className='sm:pt-8 sm:px-4 sm:flex sm:justify-between sm:bg-orange md:pt-8 md:px-4 md:flex md:justify-between md:bg-orange hidden'>
                <img src={Icon} alt="" className='sm:h-16 sm:w-16 md:h-20 md:w-20' />
                <button className='sm:text-2xl md:text-2xl' onClick={toggleBar}>{isOpen ? <FaTimes className='text-green'/> : <FaBars className='text-green'/>}</button>
            </div>
            {isOpen &&
            <NavLinks/>
    