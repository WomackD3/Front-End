import './App.scss'
import { RegisterForm } from './components/register.jsx'
import { Login } from './components/login'
import NavBar from './screens/NavBar';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h2>Wasssup Simpliciity</h2>
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
