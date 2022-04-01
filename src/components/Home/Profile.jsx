import React from 'react';
import Typical from 'react-typical'
import './Profile.css';
import './ResponsiveProfile.css';
export default function Profile() {
  return (

    <div className='profile-container'>
       
        <div className='profile-parent'>
          
            
            <div className='profile-details'>
             
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.facebook.com/awroon.osti.50'>
                        <i className='fab fa-facebook-square'></i>
                    </a>
                    <a href='https://www.instagram.com/_awroon/'>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href='#'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='#'>
                        <i className='fab fa-whatsapp'></i>
                    </a>
                    </div>
                 </div>
             
                 <div className='profile-details-name'>
                <span className='primary-text'>
                    {""}
                    Hello, I'm <span className='highlighted-text'>ARUN WOSTI </span>
                    </span>     
                </div>

                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            <Typical 
                                loop = {Infinity}
                                steps = {[
                                    "Enthusiastic Dev 🥇",
                                    1000,
                                    "Front-End Developer 💻",
                                    1000,
                                    "Flutter Developer 📱",
                                    1000,
                                    "React/ React Native 🌐",
                                    1000,
                                ]}
                            
                            />
                               
                        </h1>
                        <span className='profile-role-tagline'>
                        Knack of building applications with front-end operations.
                        </span>
                    </span>    
                </div>
                <div className='profile-options'>
                        <button className='btn primary-btn'>
                          {" "}
                          Hire Me  
                          {" "}  
                        </button>
                        <a href='Arun Wosticv.pdf' download=' Arun Wosticv.pdf'>
                           <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                </div>
         </div>
         <div className='profile-picture'>
            <div className='profile-picture-background'>
            
            </div>
         </div>
         </div>
    </div>
  )
}
