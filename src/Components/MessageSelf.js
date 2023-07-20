import React from 'react'

function MessageSelf() {
  var props2 = {name:"You",message:"This is a Sample Message"}
  return (
    <div className='self-message-container'>
      <div className='message-box'>
        <p>{props2.message}</p>
        <p className="self-time-stamp">11:59PM</p>
      </div>
    </div>
  )
}

export default MessageSelf