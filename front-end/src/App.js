import './App.scss'
import { RegisterForm } from './components/register.jsx'
import { Login } from './components/login'
import NavBar from './screens/NavBar';
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <h2>Wasssup  <span style={{ color: "red" }}>
        {user.isLoggedIn ? user.profile.name : "Guest"}
      </span></h2>
      <div>
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
