import React from 'react';
import MainLayout from './layout/MainLayout';
import './Register.css'
import profile from "./images/a.png";
import email from "./images/email.jpg";
import pass from "./images/pass.png";
import { Link } from "react-router-dom";


function Register (){

  return (   
     <><><MainLayout>
      <div>Register</div>
    </MainLayout>
    

    </><div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />

              </div>


            </div>
            <div>
              <h1>Sign Up</h1>
              <div>
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="email adress" className="name" />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input type="password" placeholder="password" className="name" />
              </div>
              <div className="login-button">
                <button>Sign Up</button>
              </div>

              <p className="link">
                <a href="#">Already registered</a> then  <a href="./Login">Login</a>
              </p>

            </div>
          </div>


        </div>
      </div></>



  )
    }
          
      



          export default Register
