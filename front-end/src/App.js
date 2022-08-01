import './App.scss'
import RegisterForm from './components/register.jsx'
import Login from './components/login'
import NavBar from './screens/NavBar';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from "react-redux";
import SidebarDemo from './components/Sidebar.jsx'

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <h2>Wasssup  <span style={{ color: "red" }}>
        {user.isLoggedIn ? user.profile.name : "Guest"}
      </span></h2>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route  path="/Sidebar" element={<SidebarDemo />} />
      </Routes>
    </div>
  );
}

export default App;
