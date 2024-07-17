import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoRecadre.png';
import profileImage from '../assets/profileImage.jpg';

export default function LoggedInNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-lg py-4">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <Link to='/'>
          <img src={logo} alt="logo" className='h-10 mr-2'/>
        </Link>
        <div className="flex items-center">
          <div className="relative mr-4">
            <button onClick={toggleDropdown} className="flex items-center text-gray-800 font-semibold hover:text-gray-600 focus:outline-none">
              <img src={profileImage} alt="profile" className="h-8 w-8 rounded-full"/>
            </button>
            <div className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 ${isDropdownOpen ? '' : 'hidden'}`}>
              <Link to='/messages' className="block px-4 py-2 text-gray-800 font-regular hover:bg-gray-100">Messages</Link>
              <Link to='/reservations' className="block px-4 py-2 text-gray-800 font-regular hover:bg-gray-100">Réservations</Link>
              <Link to='/favorites' className="block px-4 py-2 text-gray-800 font-regular hover:bg-gray-100">Favoris</Link>
              <Link to='/my-listings' className="block px-4 py-2 text-gray-800 font-regular hover:bg-gray-100">Mes annonces</Link>
              <Link to='/my-account' className="block px-4 py-2 text-gray-800 font-regular hover:bg-gray-100">Mon compte</Link>
              <button className="block px-4 py-2 text-gray-800 font-regular hover:bg-gray-100">Déconnexion</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
