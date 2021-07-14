import styled from 'styled-components';

const MascotWrapper = styled.section`
  .jellyBread {
    position: absolute;
    bottom: 700px;
    left: 150px;
    transform: rotate(20deg);
    height: 180px;
    min-height: 180px;
    width: 180px;
    min-width: 180px;
    opacity: 0.6;

    @media (max-width: 1440px) {
      bottom: 1050px;
    }
    @media (max-width: 1200px) {
      bottom: 400px;
      height: 90px;
      min-height: 90px;
      width: 90px;
      min-width: 90px;
      left: 50px;
      z-index: -1;
    }
  }
  .peanutButterBread {
    position: absolute;
    bottom: 100px;
    right: 150px;
    transform: rotate(-20deg);
    height: 180px;
    min-height: 180px;
    width: 180px;
    min-width: 180px;
    z-index: -1;
    opacity: 0.6;

    @media (max-width: 1200px) {
      height: 90px;
      min-height: 90px;
      width: 90px;
      min-width: 90px;
      right: 50px;
    }
  }
  .tealJellyfish {
    position: absolute;
    bottom: 250px;
    left: 150px;
    transform: rotate(20deg);
    height: 180px;
    min-height: 180px;
    width: 180px;
    min-width: 180px;
    opacity: 0.6;

    @media (max-width: 1440px) {
      height: 90px;
      min-height: 90px;
      width: 90px;
      min-width: 90px;
      left: 50px;
    }
    
    @media (max-width: 1200px) {
      z-index: -1;
    }
  }
  .strawberryCan {
    position: absolute;
    bottom: 250px;
    right: 150px;
    transform: rotate(-20deg);
    height: 180px;
    min-height: 180px;
    width: 180px;
    min-width: 180px;
    opacity: 0.6;
    z-index: -1;

    @media (max-width: 1200px) {
      height: 90px;
      min-height: 90px;
      width: 90px;
      min-width: 90px;
    }
  }/*
  .grapeCan {
    position: absolute;
    bottom: 250px;
    right: 150px;
    transform: rotate(-20deg);
    height: 180px;
    min-height: 180px;
    width: 180px;
    min-width: 180px;
    opacity: 0.75;
  }
  .grapeBread {
    position: absolute;
    top: 50px;
    left: 150px;
    transform: rotate(20deg);
    height: 180px;
    min-height: 180px;
    width: 180px;
    min-width: 180px;
    z-index: -1;
    opacity: 0.6;
  }
  .tealJellyfish {
    position: absolute;
    bottom: 300px;
    left: 0px;
    transform: rotate(20deg);
    height: 180px;
    min-height: 180px;
    width: 180px;
    min-width: 180px;
    opacity: 0.6;
  }
  .peanutButterJar {
    position: absolute;
    top: 50px;
    left: 150px;
    transform: rotate(20deg);
    height: 180px;
    min-height: 180px;
    width: 180px;
    min-width: 180px;
    z-index: -1;
    opacity: 0.6;
  }*/
`;
export { MascotWrapper };