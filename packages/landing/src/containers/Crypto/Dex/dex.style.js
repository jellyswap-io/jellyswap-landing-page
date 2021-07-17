import styled from 'styled-components';

const DexWrapper = styled.section`
  padding: 120px 0 80px;
  margin-top: -250px;
  @media (max-width: 1440px) {
    padding: 0px 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0px 0 0px;
  }
  .titleTextBox {
    width: 35%;
    @media (max-width: 1440px) {
      width: 38%;
    }
    @media (max-width: 1199px) {
      width: 100%;
    }
  }
  .colright {
    width: calc(65%);
    @media (max-width: 1440px) {
      width: calc(62%);
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
  justify-content: space-evenly;
  .featureWrapper {
    width: 270px;
    max-width: 270px;
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
    img {
      width: 70px;
      height: 70px;
      object-fit: contain;
      margin-bottom: 20px;
    }
  }
  .featureTitleStyle{
    font-size: 18px;
    color: #32325d;
    margin-bottom: 10px;
    margin-top: 0;
    font-weight: 500;
    text-align: center;
    line-height: 25px;
    -webkit-letter-spacing: -0.010em;
    -moz-letter-spacing: -0.010em;
    -ms-letter-spacing: -0.010em;
    letter-spacing: -0.010em;
  }
  .featureDescriptionStyle{
    font-size: 16px;
    color: #525f7f;
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 400;
    text-align: center;
    line-height: 27px;
  }
`;
export { DexWrapper, FeatureSection };
