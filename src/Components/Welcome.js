import React from 'react'
import logo from '../Images/yo-512px.png';
function Welcome() {
  return (
    <div className='welcome-container'> 
      <img src={logo} alt='Logo' className='welcome-logo'/>
      <p>Send and recieve messages directly to people present in the chat rooms.</p>
    </div>
  )
}

export default Welcome