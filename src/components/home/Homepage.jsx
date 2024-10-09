import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import VanillaTilt from "vanilla-tilt";
import { FaHtml5 } from "react-icons/fa";
import "./Homepage.css";
import hug_img from '/public/assets/icons/hugging.png'
import cv from "/public/assets/Josephrex A CV.pdf";
import {    
  FaLinkedin,
  FaStackOverflow,
  FaGithub,
  FaDev,
  FaCode,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    // VanillaTilt effect starts
    if (boxRef.current) {
      VanillaTilt.init(boxRef.current, {
        max: 18,
        speed: 200,
        glare: false,
      });
    }
    // VanillaTilt effect ends

    // Typed.js effect starts
    const options = {
      strings: ["FullStack Developer", "WebDesigner", "Youtuber"],
      typeSpeed: 30,
      backSpeed: 20,
      showCursor: true,
      cursorChar: "|",
      loop: true,
    };
    const typed = new Typed(".typing-text", options);
    // Typed.js effect ends

    // Cleanup function
    return () => {
      if (typed) typed.destroy();
    };
  }, []);
  // Cleanup function ends

  return (
    <section className="home" id="home">
      {/* for mobiles homepage image  starts */}
      <div className="mob-home-image">
        <img src="./jo2.jpg" className="img-fluid" alt="" />
      </div>
  {/* for mobiles homepage image  starts */}

  {/* for pcs homepage tilt effect image section starts */}
      <div className="home-img">
        <div className="box" ref={boxRef}>
          <div className="box1">
            <img
              src="\src\assets\icons\icons8-html-480.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="box2">
            <img
              src="\src\assets\icons\icons8-javascript.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="box3">
            <img
              src="\src\assets\icons\icons8-bootstrap.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="box4">
            <img
              src="\src\assets\icons\icons8-css.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="box5">
            <img
              src="\src\assets\icons\icons8-react-js-512.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="box6">
            <img
              src="\src\assets\icons\django-svgrepo-com.svg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
  {/* for pcs homepage tilt effect image section ends */}

  {/* hero section starts */}

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

        {/* icons section starts */}

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
          <a href="" target="_blank">
            <img src={hug_img} alt="Huggingface_icon"    style={{ width: "32px", height: "32px" }}/>
          </a>
          <a
            href="https://stackoverflow.com/users/23394959/josephrex"
            target="_blank"
          >
            <FaStackOverflow></FaStackOverflow>
          </a>

          <a href="https://leetcode.com/u/Josephrex7o7/" target="_blank">
            <FaCode></FaCode>
          </a>
        </div>
        {/* icons section ends */}

        <Link to="/contact" className="btn btn-primary">
          Hire Me!
        </Link>
        <a href={cv} target="_blank" className="btn btn-primary">
          Resume
        </a>
      </div>
    </section>
    // hero section ends
  );
};

export default HomeComponent;
