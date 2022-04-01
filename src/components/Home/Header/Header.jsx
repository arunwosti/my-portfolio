import React from 'react';
import './Header.css';


export default function Header() {
  return (
    <div className='portfolio-header'>
       <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid header">
                        <a className="navbar-brand logo text-white" href="#">ARUN WOSTI</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#"><span>Home</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white" href="#aboutme"><span>AboutMe</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white" href="#Resumesection" ><span>Resume</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white" href='#testimonial' ><span>Testimonial</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white" href='#contact'><span>ContactMe</span></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>  
                    
    </div>
  )
}
