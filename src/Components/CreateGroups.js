import { IconButton } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
function CreateGroups() {
  return (
    <div className='create-groups-container'>
      <input placeholder='Enter Group Name' className='search-box'/>
        <IconButton>
          <DoneIcon/>
        </IconButton>
    </div>
  )
}

export default CreateGroups