import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Aboutpage.css";
import Lottie from "react-lottie";
import Wave from "react-wavify";

const AboutPage = () => {
  const [animationClassLeft, setAnimationClassLeft] = useState("open-left");

  const [animationClassRight, setAnimationClassRight] = useState("open-right");


  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClassLeft("run");
      setAnimationClassRight("run");
    }, 1450);

    const onLoad = () => {
      document.documentElement.classList.add('loaded');
      document.body.classList.add('loaded');
    };
    window.addEventListener('load', onLoad);
    window.removeEventListener('load', onLoad);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-page">
      <div className={`left-sidebar1 element ${animationClassLeft}`}>
        <Carousel showThumbs={false} autoPlay interval={2000} infiniteLoop>
          <div className="carousel-slide">
            <img
              className="my-image"
              src="./1.webp"
              alt="Image 1"
            />
          </div>
          <div className="carousel-slide">
            <img
              className="my-image"
              src="./2.webp"
              alt="Image 2"
            />
          </div>
          <div className="carousel-slide">
            <img
              className="my-image"
              src=".3.webp"
              alt="Image 3"
            />
          </div>
        </Carousel>
      </div>
      <div className={`right-sidebar1 container element ${animationClassRight}`}>
        <h2 className="text-decoration-underline mb-5">About Me</h2>
        <div className="row">
          <div className="heading col-3">
            <p>Name:</p>
            <p>Profession:</p>
            <p>Age:</p>
            <p>D O B: </p>
            <p>Mobile:</p>
            <p>Address:</p>
            <p>Degree:</p>
            <p>Email:</p>
          </div>
          <div className="detail col-8">
            <p>Josephrex A</p>
            <p>Fullstack Developer</p>
            <p>25</p>
            <p>02/02/1999</p>
            <p>+91 9384929164</p>
            <p>Bangalore, India</p>
            <p>BE CSE</p>
            <p>josephrexa@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="sea">
        <Wave
          fill="#32329989"
          paused={false}
          className="wave"
          options={{
            height: 50,
            amplitude: 30,
            speed: 0.4,
            points: 4,
          }}
        />
      </div>
    </div>
  );
};
export default AboutPage;
