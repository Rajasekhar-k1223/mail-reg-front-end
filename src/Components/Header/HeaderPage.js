import React from 'react'
import './header.css';
import logo from '../../assets/images/logo_.png'
export default function HeaderPage() {
  return (
    <div className='header'>
      <div className='header-inside'>
      <div className='head-logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='head-body'></div>
        <div className='head-right-side'></div>
        </div>
    </div>
  )
}
