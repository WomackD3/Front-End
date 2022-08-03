//import './App.scss'
import RegisterForm from './components/Register.jsx'
import Login from './components/Login'
import Home from './screens/Home.jsx'
import {useState, useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import {verifyUser} from "./service/users.js"
// import { useSelector } from "react-redux";


function App() {
  const [user, setUser] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      const res = await verifyUser()
      setUser(res)
      if (!res) {
        navigate("/")
      }
    }
    fetchUser()
  }, [])
   // const user = useSelector((state) => state.user);

  return (
    <div className="App">
      {/* <meta id="colorScheme" name="color-scheme" content="light dark" /> */}
      {/* <h2>Wasssup  <span style={{ color: "red" }}>
        {user.isLoggedIn ? user.profile.name : "Guest"}
      </span></h2> */}
     
  
      
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<RegisterForm />} />
        </Routes>
    </div>
  );
}

export default App;