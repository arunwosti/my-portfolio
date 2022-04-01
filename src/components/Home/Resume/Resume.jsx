import React from 'react'
import './Resume.css'
import '../../ContactMe/Contact.css'

export default function Resume() {
  return (
    <div className="resume-container screen-container " id="Resumesection">
        <div class="resume-content">
            <div class="heading-container">
                <div class="screen-heading">
                    <span>Resume</span>
                </div>
            <div class="screen-sub-heading">
                <span>My formal Bio Details</span>
            </div>
            <div class="heading-seperator">
                <div class="seperator-line"></div>
                <div class="seperator-blob"><div>
            </div>
        </div>
        </div>
        </div>
        <div class="resume-card">
            <div class="resume-bullets">
                <div class="bullet-container">
                    <div class="bullet-icons"></div>
                <div class="bullets">
                    <div class="bullet selected-bullet">
                        <i class="bullet-logo fas fa-user-graduate"></i>
                        <span class="bullet-label">
                            <a href="#education">Education</a>
                        </span>
                    </div>
                <div class="bullet">
                    <i class="bullet-logo fas fa-clock"></i>
                    <span class="bullet-label"><a href="#work"> Work History</a></span>
                </div>
                <div class="bullet">
                    <i class="bullet-logo fas fa-laptop-code"></i>
                    <span class="bullet-label"><a href="#pskills">Programming Skills</a></span>
                </div>
                <div class="bullet">
                    <i class="bullet-logo fas fa-chart-line"></i>
                    <span class="bullet-label"><a href="#projects">Projects</a></span>
                </div>
                <div class="bullet">
                    <i class="bullet-logo fas fa-palette"></i>
                    <span class="bullet-label"><a href="#interests">Interests</a></span>
                </div>
                <div class="bullet">
                    <i class="bullet-logo fas fas fa-book"></i>
                    <span class="bullet-label"><a href="#certificates">Certificates</a></span>
                </div>
                </div>
                </div>
                </div>
                <div class="resume-bullet-details">
                    <div class="resume-details-carousal">
                        <div class="resume-screen-container" id="education">
                            <div class="resume-heading">
                                <div class="resume-main-heading">
                                <div class="heading-bullet"></div>
                                <span>The British College, Kathmandu, Nepal</span>
                                <div class="heading-date">2017-2021</div>
                                </div>
                               <div class="resume-sub-heading">
                                   <span>Bachelor of Science in Computing (Bsc.IT)</span>
                                   </div><div class="resume-heading-description">
                                       <span></span>
                                    </div>
                                </div>
                                <div class="resume-heading">
                                    <div class="resume-main-heading">
                                        <div class="heading-bullet"></div>
                                        <span>The Goldengate Int'l College, Kathmandu, Nepal</span>
                                        <div class="heading-date">2015-2017</div>
                                    </div>
                                    <div class="resume-sub-heading"><span>+2 (Higher Secondary) </span>
                                    </div>
                                    <div class="resume-heading-description"><span>Computer Science</span>
                                    </div>
                                    </div>
                                    <div class="resume-heading">
                                        <div class="resume-main-heading">
                                            <div class="heading-bullet"></div>
                                            <span>Siddhartha Vanasthali Institute, Kathmandu, Nepal</span>
                                        <div class="heading-date">2003-2015</div>
                                        </div>
                                        <div class="resume-sub-heading">
                                            <span>Secondary</span>
                                        </div>
                                        <div class="resume-heading-description"><span></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="resume-screen-container" id="work">
                                    <div class="experience-container">
                                        <div class="resume-heading">
                                            <div class="resume-main-heading">
                                                <div class="heading-bullet"></div>
                                                <span>Headway Education Foundation</span>
                                                <div class="heading-date">2019-2020</div>
                                            </div>
                                <div class="resume-sub-heading"><span>Documentation Officer</span></div>
                                <div class="resume-heading-description"><span></span></div>
                                </div>
                                <div class="experience-description">
                                    <span class="resume-description-text">-Worked as documentation officer where I had to managed all the paper works in the office system.</span>
                                    </div>
                                <div class="experience-description">
                                    <span class="resume-description-text">-Had to deal with the meetings and coordinate interviews.</span><br/>
                                    <span class="resume-description-text">  </span><br/>
                                    <span class="resume-description-text"></span><br/>
                                </div>
                                <div class="resume-heading">
                                    <div class="resume-main-heading">
                                        <div class="heading-bullet"></div>
                                        <span>Yug Shanti Saving &amp; Credit Co-operative Ltd</span>
                                    <div class="heading-date">2020-2021</div>
                                    </div>
                                    <div class="resume-sub-heading"><span>Teller</span></div>
                                    <div class="resume-heading-description"><span></span></div>
                                </div>
                                <div class="experience-description">
                                    <span class="resume-description-text">-Worked as a teller in financial institution where i had to record all the day-to-day financial transactions.</span></div>
                                </div>
                                </div>
                                <div class="resume-screen-container programming-skills-container" id="pskills">
                                    <div class="skill-parent">
                                        <div class="heading-bullet"></div>
                                        <span>JavaScript</span>
                                    <div class="skill-percentage">
                                        <div class="active-percentage-bar"></div>
                                    </div>
                                    </div>
                                    <div class="skill-parent">
                                        <div class="heading-bullet"></div
                                        ><span>React JS</span>
                                    <div class="skill-percentage">
                                        <div class="active-percentage-bar"></div>
                                    </div>
                                    </div>
                                <div class="skill-parent">
                                    <div class="heading-bullet"></div>
                                    <span>Core Java</span>
                                    <div class="skill-percentage">
                                        <div class="active-percentage-bar"></div>
                                    </div>
                                </div>
                                <div class="skill-parent">
                                    <div class="heading-bullet"></div>
                                    <span>SpringBoot</span>
                                    <div class="skill-percentage">
                                        <div class="active-percentage-bar"></div>
                                    </div>
                                    </div>
                                    <div class="skill-parent">
                                        <div class="heading-bullet"></div>
                                        <span>HTML</span>
                                    <div class="skill-percentage">
                                        <div class="active-percentage-bar"></div>
                 </div>
                 </div>
                 <div class="skill-parent">
                 <div class="heading-bullet"></div>
                 <span>CSS</span>
                 <div class="skill-percentage">
                     <div class="active-percentage-bar"></div>
                </div>
                </div>
                <div class="skill-parent">
                    <div class="heading-bullet"></div>
                    <span>Photoshop</span>
                    <div class="skill-percentage">
                        <div class="active-percentage-bar"></div>
                    </div>
                </div>
            </div>
            <div class="resume-screen-container" id="projects">
                <div class="resume-main-heading">
                    <div class="heading-bullet"></div>
                    <span>Clothing Ecommerce Website</span>
                    
                    <div class="heading-date">2022</div>
                    </div>
                    <div class="resume-sub-heading">
                        <span>Technologies Used: React JS</span>
                    </div>
                    <div class="resume-heading-description">
                        <span><a href="https://arun-clothing-ecommerce.herokuapp.com/">Click here to view</a></span>
                    </div>
            <div class="">
                <div class="resume-main-heading">
                    <div class="heading-bullet"></div>
                    <span>Corporate Website</span>
                    <div class="heading-date">2022</div>
                    </div><div class="resume-sub-heading">
                        <span>Technologies Used: HTML, CSS, JS &amp; Bootsrap</span>
                    </div>
                <div class="resume-heading-description">
                    <span>Responsive website for winery.<a href="https://arunwosti.github.io/winery_website/">Click here to view</a></span>
                </div>
                </div>
                <div class="">
                    <div class="resume-main-heading">
                    <div class="heading-bullet"></div>
                    <span>Ngo Website</span>
                    <div class="heading-date">2022</div>
                </div>
                <div class="resume-sub-heading">
                    <span>Technologies Used: HTML, CSS,SASS, JS &amp; Bootsrap</span>
                </div>
                <div class="resume-heading-description">
                    <span>Responsive website for NGO.<a href="https://arunwosti.github.io/ngo_website/"> Click here to view</a></span>
                </div>
                </div>
                <div class="">
                    <div class="resume-main-heading">
                        <div class="heading-bullet"></div>
                        <span>Travel Agency Website</span>
                        <div class="heading-date">2022</div>
                    </div>
                    <div class="resume-sub-heading">
                        <span>Technologies Used: HTML, CSS,SASS, JS &amp; Bootsrap</span>
                    </div>
                    <div class="resume-heading-description">
                        <span>Responsive website for NGO.<a href="https://arunwosti.github.io/Travel_website/#home"> Click here to view</a></span>
                    </div>
                    </div>
                    <div class="">
                        <div class="resume-main-heading">
                            <div class="heading-bullet"></div>
                            <span>Ecommerce Website</span>
                            <div class="heading-date">2022</div>
                            </div>
                            <div class="resume-sub-heading">
                                <span>Technologies Used: HTML, CSS,React, JS &amp; Bootsrap</span>
                            </div>
                            <div class="resume-heading-description">
                                <span>Responsive e-commerce website.<a href="https://arunwosti.github.io/Akira-Ecommerce/"> Click here to view</a></span>
                            </div>
                            </div>
                            </div>
                            <div class="resume-screen-container" id="interests">
                                <div class="resume-heading">
                                    <div class="resume-main-heading">
                                        <div class="heading-bullet"></div>
                                        <span>Travelling</span>
                                    <div>
                                </div>
                            </div>
                            <div class="resume-sub-heading"><span></span></div>
                            <div class="resume-heading-description">
                                <span>Apart from being a tech enthusiast and a code writer, i also love to explore to different places and thier cultures.</span>
                            </div>
                            </div>
                            <div class="resume-heading">
                                <div class="resume-main-heading">
                                    <div class="heading-bullet"></div>
                                    <span>Riding</span>
                                <div>
                            </div>
                        </div>
                        <div class="resume-sub-heading"><span></span></div>
                        <div class="resume-heading-description">
                            <span>Riding a bike is something i can never compromise with, riding is  the best stress reliever that i can get my hands on.</span>
                        </div>
                        </div>
                        <div class="resume-heading">
                            <div class="resume-main-heading">
                                <div class="heading-bullet"></div>
                                <span>Competitive Gaming</span>
                            <div></div>
                        </div>
                        <div class="resume-sub-heading"><span></span></div>
                        <div class="resume-heading-description">
                            <span>I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most.</span>
                        </div>
                        </div>
                        </div>
                        <div class="resume-screen-container" id="certificates">
                            <div class="experience-container">
                                <div class="resume-heading">
                                    <div class="resume-main-heading">
                                        <div class="heading-bullet"></div>
                                        <span>Front-End Design</span>
                                        <div class="heading-date">2021-2022</div>
                                    </div>
                        <div class="resume-sub-heading">
                            <span>Broadway Infosys</span>
                        </div>
                        <div class="resume-heading-description">
                            <span><a href="WebDesign-Certificate.jpg"> Certificate</a></span>
                        </div>
                        </div>
                        <div class="resume-heading pt-2">
                            <div class="resume-main-heading">
                                <div class="heading-bullet"></div>
                                <span> Introduction to CyberSecurity</span>
                                <div class="heading-date">2020</div>
                            </div>
                            <div class="resume-sub-heading">
                                <span> Cisco Networking Academy</span>
                            </div>
                            <div class="resume-heading-description">
                                <span><a href="Cisco-Certificate.png"> Certificate</a></span>
                            </div>
                            </div>
                            <div class="resume-heading pt-2">
                                <div class="resume-main-heading">
                                    <div class="heading-bullet"></div>
                                    <span> Flutter App Development</span>
                                    <div class="heading-date">2022</div>
                                    </div>
                                    <div class="resume-sub-heading">
                                        <span> Broadway Infosys</span>
                                    </div>
                            <div class="resume-heading-description">
                                <span><a href="#"> Certificate</a></span>
                            </div>
                        </div>
                        <div class="resume-heading pt-2">
                            <div class="resume-main-heading">
                                <div class="heading-bullet"></div>
                                <span> Core Java</span>
                                <div class="heading-date">2022</div>
                            </div>
                        <div class="resume-sub-heading">
                            <span> Broadway Infosys</span>
                        </div>
                        <div class="resume-heading-description">
                            <span><a href="#"> Certificate</a></span>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                 </div>
        </div>
        </div>
    </div>
  )};


