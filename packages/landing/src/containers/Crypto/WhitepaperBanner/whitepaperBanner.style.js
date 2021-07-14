import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import BannerBG from 'common/assets/image/crypto/main_bg.svg';

const WhitepaperBannerWrapper = styled.section`
  padding-top: 125px;
  padding-bottom: 80px;
  // background-image: url(${BannerBG});
  //background-color: #ff7675;
  background-image: -webkit-linear-gradient(30deg, #6C5CE7 0%, #F37575 100%);
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  display: flow-root;
  justify-content: center;
  align-items: center;
  @media (max-width: 1440px) {
    padding-bottom: 80px;
  }
  @media (max-width: 990px) {
    padding-top: 125px;
    padding-bottom: 80px;
  }
  @media (max-width: 768px) {
    // background-image: none;
    // background-color: #6d4efe;
  }

  @media only screen and (max-width: 480px) {
    padding-top: 130px;
    padding-bottom: 110px;
  }
  .row {
    position: relative;
    z-index: 1;
  }

  .subheading {
    color: white;
  }

  .subheading-start {
    flex-grow: 1;
  }

  .subheading-row {
    display: flex;
    align-content: space-between;
  }
`;
export default WhitepaperBannerWrapper;
