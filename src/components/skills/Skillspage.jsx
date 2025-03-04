import React from "react";
import "./Skillspage.css";
import icon1 from '/public/assets/icons/NumPy.svg';
import icon2 from '/public/assets/icons/Pandas.svg';
import icon3 from '/public/assets/icons/scikit-learn.svg';
import icon4 from '/public/assets/icons/TensorFlow.svg';
import icon5 from '/public/assets/icons/icons8-react-js.svg';
import icon6 from '/public/assets/icons/python-svgrepo-com.svg';
import icon7 from '/public/assets/icons/django-svgrepo-com.svg';
import icon8 from '/public/assets/icons/mysql.svg';
import icon9 from '/public/assets/icons/github.svg';
import icon10 from '/public/assets/icons/aws-svgrepo-com.svg';
const Skillspage = () => {
  return (
    <div>

      <div className="skills-container">
        
{/* every skill with images */}

       
       
       
        <div className="skill">
          <h5>Python</h5>
          <img
            className="img-fluid"
            src={icon6}
            alt="python-icon"
          />
        </div>
        <div className="skill">
          <h5>Django</h5>
          <img
            className="img-fluid"
            src={icon7}
            alt="django-icon"
          />
        </div>
        <div className="skill">
          <h5>MySQL</h5>
          <img
            className="img-fluid"
            src={icon8}
            alt="mysql-icon"
          />
        </div>
        <div className="skill">
          <h5>Github</h5>
          <img
            className="img-fluid"
            src={ icon9 }
            alt="github-icon"
          />
        </div>
        <div className="skill">
          <h5>AWS</h5>
          <img
            className="img-fluid"
            src={icon10}
            alt="aws-icon"
          />
        </div>
        <div className="skill">
          <h5>NumPy</h5>
          <img
            className="img-fluid"
            src={icon1}
            alt="python-icon"
          />
        </div>
        <div className="skill">
          <h5>Pandas</h5>
          <img
            className="img-fluid"
            src={icon2}
            alt="python-icon"
          />
        </div>
        <div className="skill">
          <h5>Scikit-Learn</h5>
          <img
            className="img-fluid"
            src={icon3}
            alt="python-icon"
          />
        </div>
        <div className="skill">
          <h5>TensorFlow</h5>
          <img
            className="img-fluid"
            src={icon4}
            alt="python-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Skillspage;