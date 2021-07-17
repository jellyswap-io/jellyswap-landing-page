import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import BannerBG from 'common/assets/image/background-big.svg';

const BannerWrapper = styled.section`
  padding-top: 160px;
  padding-bottom: 600px;
  //background-color: #ff7675;
  background-image: url(${BannerBG});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1440px) {
    padding-bottom: 600px;
  }
  @media (max-width: 990px) {
    padding-top: 150px;
    padding-bottom: 600px;
  }
  @media (max-width: 768px) {
    // background-image: none;
    // background-color: #6d4efe;
  }
  
  @media (max-width:  480px) {
    .socialButton .btn-text {
        visibility: hidden;
        width: 0;
        height: 0;
    }

    //.feature__block {
    //  margin-top: -40px;
    //  padding-bottom: 40px;
    //}
    
    .social-button-container {
      margin-bottom: 40px;
    }
    
    .socialButton {
      margin-top: 0!important;
      height: 30px;
      width: 30px;
    }
    
    .btn-icon {
      margin-top: 6px!important;
      margin-left: 6px!important;
    }
    
    .communityButtonsContainer {
      padding-bottom: 160px;
    }
    
  }
  
  
  .subtext {
    width: 65%;
  }
  
  .col2 {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 480px) {
    padding-top: 130px;
    padding-bottom: 300px;
  }
  .particle {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    @media (max-width: 990px) {
      display: none;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }
  .row {
    position: relative;
    z-index: 1;
  }
  .button__wrapper {
    margin-top: 40px;
    .reusecore__button {
      border-radius: 6px;
      &:first-child {
        transition: all 0.3s ease;
        margin-right: 30px;
        @media (max-width: 990px) {
          margin-right: 0;
        }
        &:hover {
          box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
        }
      }
      &:nth-child(2) {
        padding-left: 0;
        @media (max-width: 1100px) {
          padding-left: 15px;
        }

        @media (max-width: 445px) {
          padding-left: 0;
          padding-top: 15px;
        }
        margin-top: 15px;
        .btn-text {
          font-weight: 700;
          margin-top: 7px;
        }
        .btn-icon {
          margin-top: 6px;
          margin-left: 6px;
        }
      }
      > a {
        font-weight: 700;
        color: #fff;
      }
    }
    .btnWithoutColor {
      margin-right: 15px !important;
      padding: 5px 0px !important;
      .btn-icon {
        svg {
          width: 30px;
          height: 30px;
        }
      }
      .btn-text {
        padding-left: 15px;
        font-size: 15px;
        font-weight: 500 !important;
        font-family: 'Poppins', sans-serif;
      }
      &:hover {
        box-shadow: none !important;
      }
    }
    .glow-white {
      background: radial-gradient(white -100%,transparent 70%);
    }
  }
  @media (max-width: 575px) {
    .baby-jellyfish {
      visibility: hidden;
    }
    .jellyfish {
      right: 10%!important;
    }
  }
  
  .jellyfish {
    right: 5%;
  }
  

  @keyframes float {
    0%, 100% {
      top: 15%;
    }
    50% {
      top: 25%;
    }
  }

  @keyframes floatbaby {
    0%, 100% {
      top: 57.5%;
    }
    50% {
      top: 62.5%;
    }
  }
`;
export const BgImageWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  img {
    width: 100%;
    height: auto;
    display: block;
    margin: -2px -1px;
    @media (max-width: 480px) {
      margin: -2px -1px;
    }
  }
  
`;
export default BannerWrapper;
