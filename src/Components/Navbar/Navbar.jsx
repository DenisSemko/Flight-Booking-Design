import React, {useState} from 'react'
import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'

const Navbar = () => {

    const[active, setActive] = useState('navbar-menu');
    const showNavbar = () => {
        if (active === 'navbar-menu') {
            setActive('navbar-menu show-navbar');
        } else {
            setActive('navbar-menu');
        }
    }

    const[nogBg, addBg] = useState('navbar-secondary');
    const addBgColor = () => {
        if (window.scrollY >= 10) {
            addBg('navbar-secondary navbar-wh-bg')
        } else {
            addBg('navbar-secondary')
        }
    }
    window.addEventListener('scroll', addBgColor);


  return (
    <div className='navbar flex'>
        <div className="navbar-main flex">
            <div>
                <SiConsul className='icon' />
            </div>
            <div className="none flex">
                <li className='flex'> <BsPhoneVibrate className='icon' /> Support</li>
                <li className='flex'> <AiOutlineGlobal className='icon' /> Languages</li>
            </div>
            <div className="auth flex">
                <span>Sign In</span>
                <span>Sign Out</span>
            </div>
        </div>
        <div className={nogBg}>
            <div className="logo-container">
                <img src="/assets/logo.png" alt="" className='logo'/>
            </div>
            <div className={active}>
                <ul className='menu flex'>
                    <li className='list-item'>Home</li>
                    <li className='list-item'>About</li>
                    <li className='list-item'>Offers</li>
                    <li className='list-item'>Seats</li>
                    <li className='list-item'>Destination</li>
                </ul>
                <button className='btn flex contact-btn'>
                    Contact
                </button>
                <button className='btn flex contact-btn-second'>
                    Contact
                </button>
            </div>
            <div className="toggle-icon" onClick={showNavbar}>
                <CgMenuGridO className='icon' />
            </div>
        </div>
    </div>
  )
}

export default Navbar