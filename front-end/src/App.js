
import './App.scss'
import RegisterForm from './components/register.jsx'
import Login from './components/login.jsx'
import { Routes, Route } from 'react-router-dom';
import Write  from "./Write.jsx";
import Home from './screens/Home.jsx'
import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem("jwt")

    let grabProfile = () => {
      fetch("http://localhost:8080/api/profile",{
        Accept: "application/json",
        "Content-Type": "application/json",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
          // dispatch(setUser({ profile: data }))
          // navigate('/Home')
        })
  
    }
    if(!user.isLoggedIn && token){
      grabProfile()
    }
  }, [user])
   // const user = useSelector((state) => state.user);

  return (
    <div className="App">
      {/* <meta id="colorScheme" name="color-scheme" content="light dark" /> */}
      {/* <h2>Wasssup  <span style={{ color: "red" }}>
        {user.isLoggedIn ? user.profile.name : "Guest"}
      </span></h2> */}
     
  
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Write" element={<Write />} />
      </Routes>


    </div>
  );
}

export default App;