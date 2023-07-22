import React from 'react'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

function ActiveUsers() {
  return (
    <div className='list-container'>
      <div className="active-user-header">
        <div className='active-user-logo'>
         <EmojiPeopleIcon/>
        </div>
        <p className='active-user-title'>Friends</p>
      </div>
        <div className='acive-user-list'>
      <div className='list-item'>
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className='list-item'>
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className='list-item'>
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
      </div>
    </div>
  )
}

export default ActiveUsers