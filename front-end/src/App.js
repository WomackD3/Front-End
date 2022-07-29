import './App.scss'
import RegisterForm from './components/Register.jsx'
import Login from './components/login'
import NavBar from './screens/NavBar';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h2>Wasssup Simpliciity</h2>
      <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<RegisterForm />} />
          </Routes>
      </div>
     </div>
   );
}

export default App;
