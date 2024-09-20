
import './Login1.css'

import axios from 'axios';
import './images.png'
import LoginFac from './LoginFac';
import LoginRec from './LoginRec';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import { useState } from "react";
export default function Login() {
  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleClick2 = () =>{
    navigate('/LoginRec');
  }
  const handleClick = () => {
    navigate('/LoginFac'); 
    console.log("navigated");
  };
  const handleClick1 = () => {
    if(email==="admin" && password==="admin"){
      navigate('/Home');
    }
    else{
      if(email===""&&password==="")
      alert("Enter Email & password");
      else{
        alert("Enter Correct Username or Password");
      }
    }
    
  }

  return (
    
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src ={require('./images.png')} className="img-fluid" alt='img'/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form >
            <div className="form-outline mb-4">
                <h1 style={{color:"blue"}}>
                    CareerEdge-Student
                </h1>

            </div>
  
            
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid email address" required onChange={(e) => setEmail(e.target.value)}/>
              <label className="form-label" htmlFor="form3Example3">Official-Email address</label>
            </div>
  
            
            <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)}/>
              <label className="form-label" htmlFor="form3Example4">Password</label>
            </div>
  
            <div className="d-flex justify-content-between align-items-center">
             
              <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label" htmlFor="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="/" className="text-body">Forgot password?</a>
            </div>
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="button" className="btn btn-primary btn-lg" onClick={handleClick1}>Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">More Login Options:<br></br><button type="submit" onClick={handleClick}
                  className="btn btn-secondary ">Coordinator</button><hr></hr><button type="submit" onClick={handleClick2}
                  className="btn btn-secondary ">Recruiter</button> </p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
    <div
      className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
      
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2024. All rights reserved.
      </div>
     
  
      
      <div>
        <a href="/" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="/" className="text-white">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    
    </div>
    
  </section>
  )
}
