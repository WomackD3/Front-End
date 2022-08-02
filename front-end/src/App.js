//import './App.scss'
import RegisterForm from './components/Register.jsx'
import Login from './components/Login'
import NavBar from './screens/NavBar';

import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import SidebarDemo from './components/Sidebar.jsx';
import { LightDark } from './components/LightDark';
import Home from './screens/Home.jsx'
// import Posts from './components/Post.jsx'
import Write from "./Write.jsx";


function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <meta id="colorScheme" name="color-scheme" content="light dark" />
      <h2>Wasssup  <span style={{ color: "red" }}>
        {user.isLoggedIn ? user.profile.name : "Guest"}
      </span></h2>
     
  
      
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Write" element={<Write />} />
        <Route  path="/Sidebar" element={<SidebarDemo />} />
        <Route  path="/Sidebar" element={<LightDark />} />
        <Route  path="/" element={<SidebarDemo />} />
        </Routes>
    </div>
  );
}

export default App;