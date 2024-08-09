import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery";
import "./Navbarpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faGraduationCap,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import VoiceCommandHandler from "../voice/VoiceCommandHandler";
const Navbarpage = () => {
  return (
    <div>
      {/* for PC's navbar design starts */}
      <nav className="navbar  navbar-expand-lg fixed-top">
        <Link to="/" className="logo navbar-brand">
          Joe
        </Link>
        <VoiceCommandHandler></VoiceCommandHandler>
        <ul className="navbar-nav nav-links">
          <li className="nav-items">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-link" to="/education">
              Education
            </Link>
          </li>
        </ul>
      </nav>
      {/* for PC's navbar design ends */}

      {/* for mobiles and tabs navbar design starts */}
      <div className="navigation fixed-top">
        <ul className="nav-items">
          <li className="list nav-voice">
            <VoiceCommandHandler></VoiceCommandHandler>
          </li>

          <li className="list">
            <Link to="/home">
              <span className="icon">
                <FontAwesomeIcon icon={faHome} size="1x" />
              </span>
              <span className="text">Home</span>
              <span className="circle"></span>
            </Link>
          </li>

          <li className="list">
            <Link to="/about">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} size="1x" />
              </span>
              <span className="text">About</span>
              <span className="circle"></span>
            </Link>
          </li>
          <li className="list">
            <Link to="/contact">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
              </span>
              <span className="text">Contact</span>
              <span className="circle"></span>
            </Link>
          </li>
          <li className="list">
            <Link to="/skills">
              <span className="icon">
                <FontAwesomeIcon icon={faCode} size="1x" />
              </span>
              <span className="text">Skills</span>
              <span className="circle"></span>
            </Link>
          </li>
          <li className="list">
            <Link to="/education">
              <span className="icon">
                <FontAwesomeIcon icon={faGraduationCap} size="1x" />
              </span>
              <span className="text">Education</span>
              <span className="circle"></span>
            </Link>
          </li>
        </ul>
      </div>
      {/* for mobiles and tabs navbar design ends */}
    </div>
  );
};

export default Navbarpage;
