import React from "react";
import Me from "../images/Me.jpg";
// import "./style.css";

function About() {

    return (
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md about-left">
                    <img src={Me} className="about-photo img-fluid" alt="Me"></img>
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">I am a Marketing Manager for a large orthopaedic group in southern Colorado. I love what I do and am excited to continue developing my value and education. Beginning to utilize new web development skills will be one of those values that I can continue to gain experience in and help the growth of my current company. </p>
                        <p className="bio"><span className="skillHeader">Below are just some of the skills I can bring to the table:</span>
                            <ul className=" skillList text-center">
                                <li className="skill">Adobe Creative Suite</li>
                                <li className="skill">Strategy and Business Development</li>
                                <li className="skill">Search Engine Optimization</li>
                                <li className="skill">Paid Advertizing(SEM)</li>
                                <li className="skill">Community Relations and Network Affiliations/Negotiations</li>
                                <li className="skill">Brand Development</li>
                                <li className="skill">Graphic Design</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">ReactJS</li>
                                <li className="skill">HTML & CSS</li>
                                <li className="skill">Node</li>
                                <li className="skill">Express</li>
                                <li className="skill">SQL</li>
                                <li className="skill">Logo & Web Design</li>
                                <li className="skill">Project Management</li>
                            </ul>
                        </p>
                        <p className="bio">I look forward to connecting with you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;