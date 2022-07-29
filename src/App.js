import MusicList from './components/MusicList.js';
import MusicAdd from './components/MusicAdd.js';
import Register from './components/register.js';
import Login from './components/login.js';
import Errror404 from './components/error404.js';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MusicList />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/error404" element={<Errror404 />}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App;