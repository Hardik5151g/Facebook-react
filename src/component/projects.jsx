import React from "react";
import './projects.css';
import pic from './bulb.png';
import pic1 from './calculator.png';
import pic2 from './form.png';
import { AiOutlineVerticalLeft } from "react-icons/ai";

const Project=()=>{
    return(
        <div id="projects">
        <div className="container">
          <h1 className="sub-title">My Projects</h1>
          <div className="work-list">
            <div className="work">
              <img src={pic} alt="" />
              <div className="layer">
                <h3>Light Bulb</h3>
                <p>
                  This is a working light bulb made with html, css and javascript.
                </p>
                <a href="bulb.html">
                  <AiOutlineVerticalLeft/>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={pic1} alt="" />
              <div className="layer">
                <h3>Calculator</h3>
                <p>
                  This is a working calculator made with html, css and javascript.
                </p>
                <a href="calculator.html">
                <AiOutlineVerticalLeft/>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={pic2} alt="" />
              <div className="layer">
                <h3>Application Form</h3>
                <p>
                  This is a working application form made with html, css and
                  javascript.
                </p>
                <a href="form_validation.html">
                <AiOutlineVerticalLeft/>
                </a>
              </div>
            </div>
          </div>
          <a href="my_projects.html" className="btn">
            See more
          </a>
        </div>
      </div>
    )
}
export default Project