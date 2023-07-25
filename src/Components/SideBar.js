import React, { useState } from 'react'
import ConversationsItem from './ConversationsItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';

function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state)=>state.themeKey);

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
  return (
    <div className='sidebar-container'>
        <div className={"sb-header"+((lightTheme) ?"" : " dark")}>
          <div>
            <IconButton>
              <AccountCircleIcon className={"icon"+((lightTheme) ?"" : " dark")}/>
            </IconButton>
          </div>
          <div className='sb-header-right'>
            <IconButton onClick={()=>{navigate('active-users')}}>
              <PersonAddAlt1Icon className={"icon"+((lightTheme) ?"" : " dark")}/>
            </IconButton>
            <IconButton>
              <GroupAddIcon className={"icon"+((lightTheme) ?"" : " dark")}/>
            </IconButton>
            <IconButton>
              <AddCircleOutlineOutlinedIcon className={"icon"+((lightTheme) ?"" : " dark")}/>
            </IconButton>
            <IconButton onClick={()=>{dispatch(toggleTheme())}}>
              {lightTheme && <DarkModeIcon className={"icon"+((lightTheme) ?"" : " dark")}/>}
              {!lightTheme && <LightModeIcon className={"icon"+((lightTheme) ?"" : " dark")}/>}
              
            </IconButton>
            </div>
        </div>
        <div className={"sb-search"+((lightTheme) ?"" : " dark")}>
          <input className={"search-box"+((lightTheme) ?"" : " dark")} placeholder='Search'/>
          <IconButton>
            <SearchOutlinedIcon className={"icon"+((lightTheme) ?"" : " dark")}/>
          </IconButton>
        </div>
        <div className={"sb-conversations"+((lightTheme) ?"" : " dark")}>
          {conversations.map((conversation) =>{
            return <ConversationsItem props={conversation} key={conversation.name} />;
          })}
        </div>
    </div>
  )
}

export default SideBar