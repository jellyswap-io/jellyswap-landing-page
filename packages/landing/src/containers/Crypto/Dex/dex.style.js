import styled from 'styled-components';

const DexWrapper = styled.section`
  padding: 120px 0 80px;
  @media (max-width: 1440px) {
    padding: 80px 0 50px;
  }
  @media (max-width: 480px) {
    padding: 80px 0 0px;
  }
  .colleft {
    width: 35%;
    @media (max-width: 1440px) {
      width: 40%;
    }
    @media (max-width: 1199px) {
      width: 100%;
    }
  }
  .colright {
    width: calc(65% - 100px);
    margin-left: 100px;
    @media (max-width: 1440px) {
      width: calc(60% - 100px);
    }
    @media (max-width: 1199px) {
      width: 100%;
      margin-left: 0;
      margin-top: 0px;
    }
  }
`;

const FeatureSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .featureWrapper {
    max-width: 260px;
    margin-bottom: 45px;
    @media (max-width: 599px) {
      max-width: 100%;
    }
    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      margin-bottom: 20px;
    }
  }
`;
export { DexWrapper, FeatureSection };
