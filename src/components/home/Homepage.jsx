import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import VanillaTilt from "vanilla-tilt";
import { FaHtml5 } from "react-icons/fa";
import "./Homepage.css";
import {
  FaLinkedin,
  FaStackOverflow,
  FaGithub,
  FaWhatsapp,
  FaCode
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    // VanillaTilt effect
    if (boxRef.current) {
      VanillaTilt.init(boxRef.current, {
        max: 18,
        speed: 200,
        glare: false,
      });
    }

    // Typed.js effect
    const options = {
      strings: ["FullStack Developer", "WebDesigner", "Youtuber"],
      typeSpeed: 30,
      backSpeed: 20,
      showCursor: true,
      cursorChar: "|",
      loop: true,
    };
    const typed = new Typed(".typing-text", options);

    // Cleanup function
    return () => {
      if (typed) typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="mob-home-image">
        <img src="./jo2.jpg" className="img-fluid" alt="" />
      </div>

      <div className="home-img">
        <div className="box" ref={boxRef}>
          <div className="box1"><img src="\src\assets\icons\icons8-html-480.png" alt="" className="img-fluid"/></div>
          <div className="box2"><img src="\src\assets\icons\icons8-javascript.svg" alt=""   className="img-fluid" /></div>
          <div className="box3"><img src="\src\assets\icons\icons8-bootstrap.svg" alt=""   className="img-fluid" /></div>
          <div className="box4" ><img src="\src\assets\icons\icons8-css.svg" alt="" className="img-fluid" /></div>
          <div className="box5"><img src="\src\assets\icons\icons8-react-js-512.png" alt="" className="img-fluid" /></div>
          <div className="box6"><img src="\src\assets\icons\django-svgrepo-com.svg" alt="" className="img-fluid"  /></div>
        </div>
      </div>

      <div className="home-content mb-5">
        <h1>
          Hi, I'm <span className="name">Joseph Rex </span>
        </h1>
        <h3>
          I'm a <span className="typing-text"></span>
        </h3>
        <p className="">
          As a Certified FullStack WebDeveloper I build things for Web, Let's
          turn your vision into reality together.
        </p>
        <div className="social-icon">
          <a
            href="https://linkedin.com/in/joe7o7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin></FaLinkedin>
          </a>

          <a
            className="github"
            href="https://github.com/Joe7oo7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub></FaGithub>
          </a>
          <a href="#">
            <FaWhatsapp></FaWhatsapp>
          </a>
          <a href="#">
            <FaStackOverflow></FaStackOverflow>
          </a>
          <a href="#">
            <FaCode></FaCode>
          </a>
        </div>

        <Link to="/contact" className="btn btn-primary">
          Hire Me!
        </Link>
        <a href="" className="btn btn-primary">
          Resume
        </a>
      </div>
    </section>
  );
};

export default HomeComponent;
