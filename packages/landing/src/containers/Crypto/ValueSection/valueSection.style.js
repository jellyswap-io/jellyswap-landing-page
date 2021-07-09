import styled from 'styled-components';

const ValueSectionWrapper = styled.section`
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
  .title {
    padding-top: 50px;
    padding-left: 25px;
    background: white;
    border-radius: 24px;
    box-shadow: rgb(186 186 186 / 40%) 0px 4px 16px;
    @media (max-width: 1199px) {
      box-shadow: white 0 0 0;
    }
  }
  .featureWrapper {
    width: 300px;
    max-width: 300px;
    display: flex;
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
      width: 100px;
      height: 50px;
      object-fit: contain;
      margin-bottom: 20px;
      margin-left: 10px;
      margin-right: 10px;
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
  .values {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-evenly;
    margin: 1em 0px;
    padding: 1em 2em;
    width: 100%;
    flex-wrap: wrap;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
`;
export { ValueSectionWrapper, FeatureSection };
