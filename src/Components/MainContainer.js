import React,{useState} from 'react'
import "./myStyles.css";
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import SideBar from './SideBar';
import CreateGroups from './CreateGroups';
import ActiveUsers from './ActiveUsers';
import { Outlet } from 'react-router-dom';

function MainContainer() {
  
  return (
    <div className="main-container">
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