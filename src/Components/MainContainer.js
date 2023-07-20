import React,{useState} from 'react'
import "./myStyles.css";
import ChatArea from './ChatArea';
import SideBar from './SideBar';

function MainContainer() {
  const [conversations, setConversations] = useState([
  {
    name: "Test#1",
    lastMessage: "Last Message #1",
    timeStamp: "today",
  },
]);
  return (
    <div className="main-container">
      <SideBar/>
      {conversations.map((conversation) =>{
        return <ChatArea props={conversation} key={conversation.name}/>;
      })}
    </div>
  )
}

export default MainContainer