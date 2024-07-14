import React from 'react';
import Particles from 'react-particles-js';
const FishParticles = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50, // Number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: 'image',
            image: {
              src: 'path/to/fish.png', // Path to your fish image
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 20,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      }}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default FishParticles;
