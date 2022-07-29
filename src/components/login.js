import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const onSubmit = (e) => {
    e.preventDefault()
    const user = {
        Email: email,
        Password: password
    };
    axios.post('http://localhost:3001/accounts' , user)
        .then((res) => {
          if(res.data.message){
            setLoginStatus(res.data.message)
            localStorage.setItem("authenticated", false);  
            console.log(localStorage)
            setauthenticated(false)
          }else{          
            localStorage.setItem("authenticated", true);
            console.log(localStorage)
            setauthenticated(true)
            navigate('/profile'); 
          }   
          console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
};
    return (
        <div className="authform">
<form onSubmit={onSubmit}>
          <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={  (e) =>{
              setEmail(e.target.value);
            }} 
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={  (e) =>{
              setPassword(e.target.value);
            }} 
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
    )
  }
  export default Login;