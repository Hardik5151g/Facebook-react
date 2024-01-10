import React from "react";
import './contact.css';
import { AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter,AiFillLinkedin,AiFillHeart,AiOutlinePhone,AiOutlineSend } from "react-icons/ai";

const Contact=()=>{
    return(
        <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p>
                <AiOutlineSend className="i"/> hardik5151g@gmail.com
              </p>
              <p>
                <AiOutlinePhone className="i"/> 7973738696
              </p>
              <div className="social-icons">
                <a href="https://www.facebook.com/hardik.kathuria.9659">
                  <AiFillFacebook/>
                </a>
                <a href="https://www.instagram.com/kathuria8681/">
                  <AiOutlineInstagram/>
                </a>
                <a href="https://twitter.com/HardikH45029454">
                  <AiOutlineTwitter/>
                </a>
                <a href="https://www.linkedin.com/in/hardik-hardik-92936527a/">
                  <AiFillLinkedin/>
                </a>
              </div>
              <a href="images/New Text Document.pdf" className="btn btn2">
                Download CV
              </a>
            </div>
            <div className="contact-right">
              <form action="">
                <input type="text" name="name" placeholder="Your name" required="" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required=""
                />
                <textarea
                  name="Message"
                  rows={6}
                  placeholder="Your message"
                  defaultValue={""}
                />
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright © HARDIK. Made with <AiFillHeart className="y"/> by
            Hardik Kathuria.
          </p>
        </div>
      </div>
    )
}
export default Contact