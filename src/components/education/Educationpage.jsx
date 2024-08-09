import React, { useState } from "react";
import "./Educationpage.css";
import hsc_img from "/public/assets/college/2151007434.jpg";
import ssc_img from "/public/assets/college/2151040347.jpg";
import college_img from "/public/assets/college/hogboy.webp";
import certificate1 from "/public/assets/certificates/Eduonix Certificate.jpg";
import certificate2 from "/public/assets/certificates/Credo Certificate.jpg";

const Education = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseOver = (rightItemId) => {
    setHoveredItem(rightItemId);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  return (
    <div>
      {/* for tabs and mobiles starts */}
      <div className="education-page">
        {/* college  section starts */}
        <div className="college study card">
          <img
            className="img-fluid wrapper"
            src={college_img}
            loading="lazy"
            alt=""
          />
          <div className="card-body">
            <h5 className="text-decoration-underline">DEGREE</h5>
            <p>BE Computer Science Engineering</p>
            <p>70%</p>
            <p>Anna University Tamilnadu</p>
          </div>
        </div>
        {/* college  section ends */}

        {/* HSC  section starts */}
        <div className="hsc study card">
          <img
            className="img-fluid wrapper"
            src={hsc_img}
            loading="lazy"
            alt=""
          />
          <div className="card-body">
            <h5 className="text-decoration-underline">HSE</h5>
            <p>St.Peter's Higher Secondary School</p>
            <p>77%</p>
            <p>StateBoard Tamilnadu</p>
          </div>
        </div>
        {/* HSC  section ends */}

        {/* SSC  section starts */}

        <div className="sslc study card">
          <img
            className="img-fluid wrapper"
            src={ssc_img}
            loading="lazy"
            alt=""
          />
          <div className="card-body">
            <h5 className="text-decoration-underline">SSC</h5>
            <p>St.Peter's Higher Secondary School</p>
            <p>90%</p>
            <p>StateBoard Tamilnadu</p>
          </div>
        </div>
        {/* SSC  section ends */}

        {/* Certification  section starts */}
        <div className="certification study card">
          <img
            className="img-fluid wrapper"
            src={certificate1}
            loading="lazy"
            alt=""
          />
          <div className="card-body">
            <h5 className="text-decoration-underline">Certification</h5>
            <p>Basic WebDevelopment Course</p>
            <p>Eduonix Learning Solutions-Chennai</p>
          </div>
        </div>

        <div className="certification study card">
          <img
            className="img-fluid wrapper"
            src={certificate2}
            loading="lazy"
            alt=""
          />
          <div className="card-body">
            <h5 className="text-decoration-underline">Certification</h5>
            <p>Django with ReactJs-FullStack Development</p>
            <p>CredoSystemZ-Chennai</p>
          </div>
        </div>
      </div>
      {/* Certification  section ends */}

      {/* for tabs and mobiles ends */}

      {/* for Pc's sections starts */}

      <div className="education">
        {/* left side items */}
        <div className="left-sidebar text-center">
          <div
            className="side-menu-item"
            id="item1"
            onMouseOver={() => handleMouseOver("right-item1")}
            onMouseOut={handleMouseOut}
          >
            <h5 className="text-light">Degree</h5>
          </div>
          <div
            className="side-menu-item"
            id="item2"
            onMouseOver={() => handleMouseOver("right-item2")}
            onMouseOut={handleMouseOut}
          >
            <h5 className="text-light">HSE</h5>
          </div>
          <div
            className="side-menu-item"
            id="item3"
            onMouseOver={() => handleMouseOver("right-item3")}
            onMouseOut={handleMouseOut}
          >
            <h5 className="text-light">SSC</h5>
          </div>
          <div
            className="side-menu-item"
            id="item4"
            onMouseOver={() => handleMouseOver("right-item4")}
            onMouseOut={handleMouseOut}
          >
            <h5 className="text-light">Certification</h5>
          </div>
          <div
            className="side-menu-item"
            id="item5"
            onMouseOver={() => handleMouseOver("right-item5")}
            onMouseOut={handleMouseOut}
          >
            <h5 className="text-light">Certification</h5>
          </div>
        </div>
        {/* left side item ends */}

        {/* Right side items */}
        <div className="right-sidebar">
          <div
            className={`right-side-item ${
              hoveredItem === "right-item1" ? "scale-up" : ""
            }`}
            id="right-item1"
          >
            <img
              className="img-fluid degree-img"
              src={college_img}
              loading="lazy"
              alt=""
            />

            <div className="card-body text-light">
              <h5 className="text-decoration-underline">DEGREE</h5>
              <p>BE Computer Science Engineering</p>
              <p>70%</p>
              <p>Anna University</p>
              <p>Chennai-Tamilnadu</p>
            </div>
          </div>
          <div
            className={`right-side-item ${
              hoveredItem === "right-item2" ? "scale-up" : ""
            }`}
            id="right-item2"
          >
            <img
              className="img-fluid degree-img"
              src={hsc_img}
              loading="lazy"
              alt=""
            />
            <div className="card-body text-light">
              <h5 className="text-decoration-underline">HSE</h5>
              <p>Higher Secondary Education</p>
              <p>77%</p>
              <p>St.Peters Higher Secondary School</p>
              <p>StateBoard-Tamilnadu</p>
            </div>
          </div>
          <div
            className={`right-side-item ${
              hoveredItem === "right-item3" ? "scale-up" : ""
            }`}
            id="right-item3"
          >
            <img
              className="img-fluid degree-img"
              src={ssc_img}
              loading="lazy"
              alt=""
            />
            <div className="card-body text-light">
              <h5 className="text-decoration-underline">SSC</h5>
              <p>Secondary School Education</p>
              <p>90%</p>
              <source />
              <p>St.Peters Higher Secondary School</p>
              <p>StateBoard-Tamilnadu</p>
            </div>
          </div>
          <div
            className={`right-side-item ${
              hoveredItem === "right-item4" ? "scale-up" : ""
            }`}
            id="right-item4"
          >
            <img
              className="img-fluid degree-img"
              src={certificate1}
              loading="lazy"
              alt=""
            />
            <div className="card-body text-light">
              <h5 className="text-decoration-underline">Certification</h5>
              <p>Basic Web Development From Scratch Course</p>
              <p>Eduonix Learning Solutions</p>
              <p>Online Course</p>
              <p>2022</p>
            </div>
          </div>
          <div
            className={`right-side-item ${
              hoveredItem === "right-item5" ? "scale-up" : ""
            }`}
            id="right-item5"
          >
            <img
              className="img-fluid degree-img"
              src={certificate2}
              loading="lazy"
              alt=""
            />
            <div className="card-body text-light">
              <h5 className="text-decoration-underline">Certification</h5>
              <p>FullStack WebDevelopment Course</p>
              <p>Credo Systemz</p>
              <p>Chennai</p>
              <p>9Months-2024</p>
            </div>
          </div>
        </div>
        {/* Right side items */}
      </div>
      {/* for Pc's sections ends */}
    </div>
  );
};

export default Education;
