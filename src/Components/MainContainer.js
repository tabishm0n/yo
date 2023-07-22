import React,{useState} from 'react'
import "./myStyles.css";
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import SideBar from './SideBar';
import CreateGroups from './CreateGroups';
import ActiveUsers from './ActiveUsers';
function MainContainer() {
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
    <div className="main-container">
      <SideBar/>
      {/* <Welcome/> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={conversations[0]}/> */}
      <ActiveUsers/>
    </div>
  )
}

export default MainContainer