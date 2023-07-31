import React from 'react'
import { useSelector } from 'react-redux';

function MessageSelf() {
  const lightTheme = useSelector((state)=>state.themeKey);

  var props2 = {name:"You",message:"This is a Sample Message"}
  return (
    <div className={"self-message-container"+((lightTheme) ?"" : " dark-hover")}>
    <div className={"message-box"+((lightTheme) ?"" : " message-box-dark")}>
        <p>{props2.message}</p>
        <p className="self-time-stamp">11:59PM</p>
      </div>
    </div>
  )
}

export default MessageSelf