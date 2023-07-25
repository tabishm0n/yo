import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ConversationsItem({props}) {
  const lightTheme = useSelector((state)=>state.themeKey);
  const navigate=useNavigate();
  return (
    <div className={"conversation-container"+((lightTheme) ?"" : " dark-hover")} onClick={()=>{navigate('chat')}}>
      <p className={"con-icon"+((lightTheme) ?"" : " dark-icon")}>{props.name[0]}</p>
      <p className={"con-title"+((lightTheme) ?"" : " dark-text")}>{props.name}</p>
      <p className="con-lastMessage">{props.lastMessage}</p>
      <p className="con-timeStamp">{props.timeStamp}</p>
    </div>
  )
}

export default ConversationsItem