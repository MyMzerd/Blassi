import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logoRecadre.png'

export default function LoginNavbar() {
  return (
    <nav className="bg-white shadow-lg py-4">
      <div className="max-w-4xl mx-auto px-4 flex justify-start">
        <Link to='/'>
            <img src={logo} alt="logo" className='h-10 mr-2'/>
        </Link>
      </div>
    </nav>
  )
}
