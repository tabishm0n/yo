import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SideBar() {
  return (
    <div className='sidebar-container'>
        <div className="sb-header">Header</div>
        <div className="sb-search">Search</div>
        <div className="sb-conversations">Conversations</div>
    </div>
  )
}

export default SideBar