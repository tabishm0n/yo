import React from 'react'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { useSelector } from 'react-redux';

function ActiveUsers() {
  const lightTheme = useSelector((state)=>state.themeKey);

  return (
    <div className='list-container'>
      <div className={"active-user-header"+((lightTheme) ?"" : " dark")}>
        <div className='active-user-logo'>
         <EmojiPeopleIcon/>
        </div>
        <p className={"active-user-title"+((lightTheme) ?"" : " dark-text")}>Friends</p>
      </div>
        <div className='acive-user-list'>
      <div className={"list-item"+((lightTheme) ?"" : " dark2")}>
          <p className={"con-icon"+((lightTheme) ?"" : " dark-icon")}>T</p>
          <p className={"con-title"+((lightTheme) ?"" : " dark-text")}>Test User</p>
        </div>
        <div className={"list-item"+((lightTheme) ?"" : " dark2")}>
          <p className={"con-icon"+((lightTheme) ?"" : " dark-icon")}>T</p>
          <p className={"con-title"+((lightTheme) ?"" : " dark-text")}>Test User</p>
        </div>
        <div className={"list-item"+((lightTheme) ?"" : " dark2")}>
          <p className={"con-icon"+((lightTheme) ?"" : " dark-icon")}>T</p>
          <p className={"con-title"+((lightTheme) ?"" : " dark-text")}>Test User</p>
        </div>
      </div>
    </div>
  )
}

export default ActiveUsers