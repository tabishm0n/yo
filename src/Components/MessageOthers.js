import React from 'react'

function MessageOthers() {
  var props1 = {name:"RandomUser",message:"This is a sample Message"};
  return (
    <div className='conversation-container'>
      <p className="con-icon">{props1.name[0]}</p>
        <div className='other-text-content'>
          <p className="con-title">{props1.name}</p>
          <p className="con-last-message">{props1.message}</p>
          <p className="self-time-stamp">11:59PM</p>
        </div>
      </div>
  )
}

export default MessageOthers