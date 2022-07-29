import MusicList from './components/MusicList.js';
import Profile from './components/profile.js';
import Register from './components/register.js';
import Login from './components/login.js';
import Errror404 from './components/error404.js';

import {
  BrowserRouter as Router,
  Route,
  Routes} from "react-router-dom";
import './App.css';
function App() {
  return (
    <Router>
      <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand me-2" href="/">
     Home
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <div class="d-flex align-items-center">
        <a href="/login" class="btn btn-link px-3 me-2">
          Login
        </a>
        <a href="/register" class="btn btn-primary me-3" >
          Sign up for free
        </a>
      </div>
    </div>
  </div>
</nav>
        <Routes>
          <Route path="/" element={<MusicList />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/error404" element={<Errror404 />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App;