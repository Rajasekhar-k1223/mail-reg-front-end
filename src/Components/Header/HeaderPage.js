import React, { useState, useEffect, useRef } from 'react'
import './header.css';
import logo from '../../assets/images/logo_.png'
export default function HeaderPage() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
   // Function to close dropdown when clicking outside
   const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to listen for clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='header'>
      <div className='header-inside'>
      <div className='head-logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='head-body'></div>
        <div className='head-right-side'>

        <div className="user-info-dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-button">
        User Info
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
        </div>
        </div>
    </div>
  )
}
