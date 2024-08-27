import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Hamburger from 'hamburger-react'

const Nav = () => { 
    const [open, setOpen] = useState(false)
  return (
    <nav className="Nav">
        <Link to="/"><img className='logo-img' src="/images/fortunecodelogo.png" alt="Logo" /></Link>
        <div className='name'>
        </div>
        <div className="hamburger-menu">    
            <Hamburger className="hamburger-menu"
            size={24}
            toggled={open}
            toggle={setOpen}
            />
        </div>
        
        {open && <div className='nav-ul'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            </div>}
            
        </nav>
  )
}

export default Nav