import React from 'react'
import { useSelector } from 'react-redux';

function MessageOthers() {
  const lightTheme = useSelector((state)=>state.themeKey);

  var props1 = {name:"RandomUser",message:"This is a sample Message"};
  return (
    <div className={"conversation-container"+((lightTheme) ?"" : " dark-hover")}>
      <p className="con-icon">{props1.name[0]}</p>
      <div className={"other-text-content"+((lightTheme) ?"" : " other-text-content-dark")}>
          <p className={"con-title"+((lightTheme) ?"" : " dark-text")}>{props1.name}</p>
          <p className="con-last-message">{props1.message}</p>
          <p className="self-time-stamp">11:59PM</p>
        </div>
      </div>
  )
}

export default MessageOthers