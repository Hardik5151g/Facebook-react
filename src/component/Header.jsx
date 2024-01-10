import React from "react";
import './Header.css';
import pic from "./log.jpg";
import { AiOutlineClose,AiOutlineBars } from "react-icons/ai";


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    // Sidemenu.style.right= "0";
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right= "-200px";
}

const Header=()=>{
    return(
        <>
        <div id="header">
      <div className="container">
        <nav className="nav">
          <img src={pic} alt="" className="logo" />
          <ul id="sidemenu">
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          
            <AiOutlineClose className="fa-solid fa-xmark" onClick={closemenu}/>
            {/* <i className="fa-solid fa-xmark" onclick="closemenu()" /> */}
          </ul>
          <AiOutlineBars className="fa-solid fa-bars"  onClick={openmenu}  />
          {/* <i className="fa-solid fa-bars" onclick="openmenu()" /> */}
        </nav>
        <div className="head-text">
          <p>Full Stack Web Devloper </p>
          <h1>
            Hi, I'm <span>Hardik</span> Kathuria <br /> From India
          </h1>
        </div>
      </div>
    </div>
        </>
    )
}
export default Header