import React from 'react';
import MainLayout from './layout/MainLayout';
import './Login.css'
import profile from "./images/a.png";
import email from "./images/email.jpg";
import pass from "./images/pass.png";


function Login (){

  return (   
     <><><MainLayout>
      <div>Login</div>
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
              <h1>Login </h1>
              <div>
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="email adress" className="name" />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input type="password" placeholder="password" className="name" />
              </div>
              <div className="login-button">
                <button>Login</button>
              </div>

              <p className="link">
                <a href="#">Forgot password ?</a> Or<a href="./Register">Sign Up</a>
              </p>


            </div>
          </div>


        </div>
      </div></>



  )
    }
          
      



          export default Login