import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

function Register() {
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

    const onSubmit = (e) => {
      e.preventDefault()
      const user = {
          Email: emailReg,
          Password: passwordReg
      };
      axios.post('http://localhost:3001/register' , user)
          .then((res) => {
              console.log(res.data)
          }).catch((error) => {
              console.log(error)
          });
  };
    return (
        <div class="authform">
<form onSubmit={onSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
           onChange={  (e) =>{
              setEmailReg(e.target.value);
            }} 
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={ (e) =>{
              setPasswordReg(e.target.value);
            }}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
    )
  }
  export default Register;