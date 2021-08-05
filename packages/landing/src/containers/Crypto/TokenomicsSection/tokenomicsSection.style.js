import styled from 'styled-components';

const TokenomicsSectionWrapper = styled.section`
  padding: 100px 0 0px;
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
  }
  .tokenomicsImage {
    height: 60px;
    width: 60px;
    background-size: 150%;
    background-position: center center;
    border-radius: 8px;
    overflow: hidden;
  }

  .tokenomics {
    display: flex;
    margin: 1em 0px;
    padding: 1em 1em;
    width: 100%;
    flex-wrap: wrap;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  @media (max-width: 720px) {
    .tokenomics {
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
    }
  }
`;
export { TokenomicsSectionWrapper, FeatureSection };
