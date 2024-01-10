import React from "react";
import './services.css';

const Services=()=>{
    return(
        <div id="services">
        <div className="container">
          <h1 className="sub-title">My Services</h1>
          <div className="services-list">
            <div>
              <i className="fa-solid fa-code" />
              <h2>
                Web <br /> Designing
              </h2>
              <p>
                Web design refers to the design of websites that are displayed on the
                internet. It usually refers to the user experience aspects of website
                development rather than software development.
              </p>
              <a href="https://www.interaction-design.org/literature/topics/web-design">
                learn more
              </a>
            </div>
            <div>
              <i className="fa-solid fa-crop-simple" />
              <h2>Back-end Development</h2>
              <p>
                Back-end Development refers to the server-side development. It focuses
                on databases, scripting, website architecture. It contains
                behind-the-scene activities that occur when performing any action on a
                website.
              </p>
              <a href="https://www.guru99.com/what-is-backend-developer.html">
                learn more
              </a>
            </div>
            <div>
              <i className="fa-solid fa-code-compare" />
              <h2>Full Stack Devlopment</h2>
              <p>
                It refers to the development of both front end(client side) and back
                end(server side) portions of web application.Full stack web developers
                have the ability to design complete web applications and websites.{" "}
              </p>
              <a href="https://www.geeksforgeeks.org/what-is-full-stack-development/">
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Services