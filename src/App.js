import logo from './logo.svg';
import './App.css';
import MainContainer from './Components/MainContainer';
import Login from './Components/Login';
import {Route,Routes} from 'react-router-dom';
import ChatArea from './Components/ChatArea';
import ActiveUsers from './Components/ActiveUsers';
import CreateGroups from './Components/CreateGroups';
import Groups from './Components/Groups';
import Welcome from './Components/Welcome';
import { useSelector } from 'react-redux';

function App() {
  const lightTheme = useSelector((state)=>state.themeKey);

  return (
    <div className={"App"+((lightTheme) ?"" : " App-dark")}>
    {/* <MainContainer/> */}
    {/* <Login/> */}
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route> 
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="active-users" element={<ActiveUsers />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="create-groups" element={<CreateGroups />}></Route> 
      </Route>
    </Routes>
    </div>
  );
}

export default App;
