import React,{useState} from 'react'
import "./myStyles.css";
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import SideBar from './SideBar';
import CreateGroups from './CreateGroups';
import ActiveUsers from './ActiveUsers';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MainContainer() {
  const lightTheme = useSelector((state)=>state.themeKey);

  return (
    <div className={"main-container"+((lightTheme) ?"" : " dark-background")}>
      <SideBar/>
      <Outlet />
      {/* <Welcome/> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={conversations[0]}/> */}
      {/* <ActiveUsers/> */}
    </div>
  )
}

export default MainContainer