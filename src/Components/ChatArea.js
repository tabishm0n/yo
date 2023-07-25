import React ,{useState} from 'react'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';

function ChatArea() {
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
      var props=conversations[0];
  return (
    <div className='chatArea-container'>
        <div className='chatArea-header'>
            <p className='con-icon'>{props.name[0]}</p>
            <div className='header-text'>
                <p className='con-title'>{props.name}</p>
                <p className='con-timeStamp'>{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </div>
        <div className={"messages-container"+((lightTheme) ?"" : " dark")}>
            <MessageOthers/>
            <MessageSelf/>
            <MessageOthers/>
            <MessageSelf/>
            <MessageOthers/>
            <MessageSelf/>
            <MessageOthers/>
            <MessageSelf/>
            <MessageOthers/>
            <MessageSelf/>
            <MessageOthers/>
            <MessageSelf/>
            <MessageOthers/>
            <MessageSelf/>
        </div>
        <div className='text-input-area'>
            <input placeholder='Type a message' className='search-box'/>
            <IconButton>
                <SendIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea