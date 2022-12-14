import React from 'react'
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='/register' className='navbar-a'>
        Register
      </a>
      <a href='/' className='navbar-a'>
        Homepage
      </a>
      <a href='/errands' className='navbar-a'>
        Errands
      </a>

    </div>
  )
}

export default Navbar