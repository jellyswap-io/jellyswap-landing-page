import React from 'react';
import Particles from 'react-particles-js';

import Particle4 from 'common/assets/image/crypto/particles/particle-4.png';

const ParticlesComponent = () => {
  return (
    <>
      <Particles
        className="particle"
        width={'50%'}
        height={'60%'}
        params={{
          particles: {
            height: 1412,
            number: {
              value: 15,
              density: { enable: true, value_area: 800 },
            },

            shape: {
              type: ['images'],
              images: [
                {
                  src: `${Particle4}`,
                  width: 41,
                  height: 41,
                },
              ],
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 10,
              random: false,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: false,
              straight: false,
              bounce: true,
              attract: { enable: true, rotateX: 100, rotateY: 400 },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};
export default ParticlesComponent;
