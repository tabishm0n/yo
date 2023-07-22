import React, {useState} from 'react'
import ConversationsItem from './ConversationsItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton } from '@mui/material';
import {useNavigate} from 'react-router-dom';
function SideBar() {
  const [conversations, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Saber",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Asad",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ]);
  const navigate = useNavigate();
  return (
    <div className='sidebar-container'>
        <div className="sb-header">
          <div>
            <IconButton>
              <AccountCircleIcon/>
            </IconButton>
          </div>
          <div>
            <IconButton onClick={()=>{navigate('active-users')}}>
              <PersonAddAlt1Icon/>
            </IconButton>
            <IconButton>
              <GroupAddIcon/>
            </IconButton>
            <IconButton>
              <AddCircleOutlineOutlinedIcon/>
            </IconButton>
            <IconButton>
              <DarkModeOutlinedIcon/>
            </IconButton>
            </div>
        </div>
        <div className="sb-search">
          <input className='search-box' placeholder='Search'/>
          <IconButton>
            <SearchOutlinedIcon/>
          </IconButton>
        </div>
        <div className="sb-conversations">
          {conversations.map((conversation) =>{
            return <ConversationsItem props={conversation} key={conversation.name} />;
          })}
        </div>
    </div>
  )
}

export default SideBar