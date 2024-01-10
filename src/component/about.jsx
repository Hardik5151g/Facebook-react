import React from "react";
import './About.css';
import pic from "./about.png"

const About=()=>{
    return(
        <div id="about">
        <div className="container">
        <div className="row">
           <div className="about-col-1">
           <img src={pic} alt="" />
           </div>
           <div className="about-col-2">
           <h1 className="sub-title">About Me</h1>
           <p>
          Hi, My name is Hardik Kathuria.I am a Full Stack Web Devloper.I did my
          course of web devlopment from Sithub institute Delhi.I love playing
          guitar.I am also a business man.I love animals and i am also a member
          of animal care NGO called jeev prem rajpura.
        </p>
        <br />
        {/* -------progress------- */}
        <div className="container1">
          <div className="skill-box">
            <span className="title">HTML</span>
            <div className="skill-bar">
              <span className="skill-per html">
                <span className="tooltip">93%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">CSS</span>
            <div className="skill-bar">
              <span className="skill-per css">
                <span className="tooltip">85%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">bootstrap</span>
            <div className="skill-bar">
              <span className="skill-per javascript">
                <span className="tooltip">68%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">JavaScript</span>
            <div className="skill-bar">
              <span className="skill-per nodejs">
                <span className="tooltip">57%</span>
              </span>
            </div>
          </div>
        </div>
        {/* -------progress_end------- */}
      </div>
    </div>
  </div>
</div>
    )
}
export default About