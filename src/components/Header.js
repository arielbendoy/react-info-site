import React from 'react'
import reactLogo from '../images/react-logo.png'

export default function Header() {
  return (
    <nav>
      <img src={reactLogo} alt='react logo' className='nav--icon' />
      <h3 className='nav--logo_text'>ReactFacts</h3>
      <h4 className='nav--title'>React Project 1</h4>
    </nav>
  )
}
