import React from 'react'
import "./myStyles.css";
import WorkArea from './WorkArea';
import SideBar from './SideBar';

function MainContainer() {
  return (
    <div className="main-container">
      <SideBar/>
      <WorkArea/>
    </div>
  )
}

export default MainContainer