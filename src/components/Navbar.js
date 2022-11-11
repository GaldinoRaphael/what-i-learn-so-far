import React from 'react'
import ReactLogo from '../imgs/reactjs-icon.svg';

export default function Navbar(){
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={ReactLogo} alt="reactjs logo"/>
                <h1>ReactJs</h1>
            </div>
            <h2>1º Class - Static Pages</h2>
        </nav>
    )
}