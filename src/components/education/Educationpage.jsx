import React, { useState } from 'react';
import './Educationpage.css';

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
      <div className="education-page">
        <div className="college study card">
          <img className="img-fluid wrapper" src="./Portfolio/public/assets/college/2151066388.jpg" loading="lazy" alt="" />
          <div className="card-body">
            <h5 className="text-decoration-underline">DEGREE</h5>
            <p>BE Computer Science Engineering</p>
            <p>70%</p>
            <p>Anna University Tamilnadu</p>
          </div>
        </div>
        <div className="hsc study card">
          <img className="img-fluid wrapper" src="./Portfolio/public/assets/college/2151007434.jpg" loading="lazy" alt="" />
          <div className="card-body">
            <h5 className="text-decoration-underline">HSE</h5>
            <p>St.Peter's Higher Secondary School</p>
            <p>77%</p>
            <p>StateBoard Tamilnadu</p>
          </div>
        </div>
        <div className="sslc study card">
          <img className="img-fluid wrapper" src="./Portfolio/public/assets/college/2151040347.jpg" loading="lazy" alt="" />
          <div className="card-body">
            <h5 className="text-decoration-underline">SSC</h5>
            <p>St.Peter's Higher Secondary School</p>
            <p>90%</p>
            <p>StateBoard Tamilnadu</p>
          </div>
        </div>

        <div className="certification study card">
          <img className="img-fluid wrapper" src="./Portfolio/public/assets/certificates/Eduonix Certificate.jpg" loading="lazy" alt="" />
          <div className="card-body">
            <h5 className="text-decoration-underline">Certification</h5>
            <p>Basic WebDevelopment Course</p>
            <p>Eduonix Learning Solutions-Chennai</p>
          </div>
        </div>

        <div className="certification study card">
          <img className="img-fluid wrapper" src="./Portfolio/public/assets/certificates/Credo Certificate.jpg" loading="lazy" alt="" />
          <div className="card-body">
            <h5 className="text-decoration-underline">Certification</h5>
            <p>Django with ReactJs-FullStack Development</p>
            <p>CredoSystemZ-Chennai</p>
          </div>
        </div>
      </div>

      <div className="education">
        <div className="left-sidebar text-center">
          <div className="side-menu-item" id="item1" onMouseOver={() => handleMouseOver('right-item1')} onMouseOut={handleMouseOut}>
            <h5 className="text-light">Degree</h5>
          </div>
          <div className="side-menu-item" id="item2" onMouseOver={() => handleMouseOver('right-item2')} onMouseOut={handleMouseOut}>
            <h5 className="text-light">HSE</h5>
          </div>
          <div className="side-menu-item" id="item3" onMouseOver={() => handleMouseOver('right-item3')} onMouseOut={handleMouseOut}>
            <h5 className="text-light">SSC</h5>
          </div>
          <div className="side-menu-item" id="item4" onMouseOver={() => handleMouseOver('right-item4')} onMouseOut={handleMouseOut}>
            <h5 className="text-light">Certification</h5>
          </div>
          <div className="side-menu-item" id="item5" onMouseOver={() => handleMouseOver('right-item5')} onMouseOut={handleMouseOut}>
            <h5 className="text-light">Certification</h5>
          </div>
        </div>

        <div className="right-sidebar">
          <div className={`right-side-item ${hoveredItem === 'right-item1' ? 'scale-up' : ''}`} id="right-item1">
            <img className="img-fluid degree-img" src="./Portfolio/public/assets/backgrounds/2151005751.jpg" loading="lazy" alt="" />
            <div className="card-body text-light">
              <h5 className="text-decoration-underline">DEGREE</h5>
              <p>BE Computer Science Engineering</p>
              <p>70%</p>
              <p>Anna University</p>
              <p>Chennai-Tamilnadu</p>
            </div>
          </div>
          <div className={`right-side-item ${hoveredItem === 'right-item2' ? 'scale-up' : ''}`} id="right-item2">
            <img className="img-fluid degree-img" src="./Portfolio/public/assets/college/2151007434.jpg" loading="lazy" alt="" />
            <div className="card-body text-light">
              <h5 className="text-decoration-underline">HSE</h5>
              <p>Higher Secondary Education</p>
              <p>77%</p>
              <p>St.Peters Higher Secondary School</p>
              <p>StateBoard-Tamilnadu</p>
            </div>
          </div>
          <div className={`right-side-item ${hoveredItem === 'right-item3' ? 'scale-up' : ''}`} id="right-item3">
            <img className="img-fluid degree-img" src="./Portfolio/public/assets/college/2151040347.jpg" loading="lazy" alt="" />
            <div className="card-body text-light">
              <h5 className="text-decoration-underline">SSC</h5>
              <p>Secondary School Education</p>
              <p>90%</p><source />
              <p>St.Peters Higher Secondary School</p>
              <p>StateBoard-Tamilnadu</p>
            </div>
          </div>
          <div className={`right-side-item ${hoveredItem === 'right-item4' ? 'scale-up' : ''}`} id="right-item4">
            <img className="img-fluid degree-img" src="./Portfolio/public/assets/certificates/Eduonix Certificate.jpg" loading="lazy" alt="" />
            <div className="card-body text-light">
              <h5 className="text-decoration-underline">Certification</h5>
              <p>Basic Web Development From Scratch Course</p>
              <p>Eduonix Learning Solutions</p>
              <p>Online Course</p>
              <p>2022</p>
            </div>
          </div>
          <div className={`right-side-item ${hoveredItem === 'right-item5' ? 'scale-up' : ''}`} id="right-item5">
            <img className="img-fluid degree-img" src="./Portfolio/public/assets/certificates/Credo Certificate.jpg" loading="lazy" alt="" />
            <div className="card-body text-light">
              <h5 className="text-decoration-underline">Certification</h5>
              <p>FullStack WebDevelopment Course</p>
              <p>Credo Systemz</p>
              <p>Chennai</p>
              <p>9Months-2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
