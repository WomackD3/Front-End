import './App.scss'
import RegisterForm from './components/register.jsx'
import Login from './components/login'
import NavBar from './screens/NavBar';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import SidebarDemo from './components/Sidebar.jsx'
import { LightDark } from './components/LightDark';
import Posts from './components/Post.jsx'
function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <meta id="colorScheme" name="color-scheme" content="light dark" />
      <h2>Wasssup  <span style={{ color: "red" }}>
        {user.isLoggedIn ? user.profile.name : "Guest"}
      </span></h2>
      <NavBar />
      <Posts />
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route  path="/Sidebar" element={<LightDark />} />
        <Route  path="/Sidebar" element={<SidebarDemo />} />
      </Routes>
    </div>
  );
}

export default App;
