import styled from 'styled-components';

const SocialSectionWrapper = styled.section`
  padding: 30px 0 100px;
`;
const FeatureSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: flex-start;
  }
  .featureWrapper {
    margin-top: 50px;
    display: flex;
    @media (max-width: 599px) {
      max-width: 100%;
    }
    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      margin-bottom: 20px;
      border-width: 2px;
      border-color: rgb(233, 227, 254);
      border-radius: 10px;
      background-color: rgb(243, 242, 250);
      padding: 8px 10px;
    }
    .contextPortion {
      margin-left: 15px;
    }
  }
  .socialButton {
    width: 320px;
    max-width: 240px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: center;
    padding: 1.5em 1em 1em;
    margin: 1em;
    background: white;
    box-shadow: rgb(186 186 186 / 40%) 0px 4px 16px;
    border-radius: 24px;
  }
  .socialImage {
    height: 60px;
    width: 60px;
    background-size: 150%;
    background-position: center center;
    border-radius: 8px;
    overflow: hidden;
  }
`;
export { SocialSectionWrapper, FeatureSection };
