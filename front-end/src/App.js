import './App.scss'
import RegisterForm from './components/Register.jsx'
import Login from './components/login'
import NavBar from './screens/NavBar';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <NavBar />
    <div className="App">
      <h2>Wasssup  <span style={{ color: "red" }}>
        {user.isLoggedIn ? user.profile.name : "Guest"}
      </span></h2>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<RegisterForm />} />
      </Routes>
      <Login />
        <Router>
          {<NavBar />}
        </Router>
      <RegisterForm />
     </div>
    </div>
  );
}

export default App;
