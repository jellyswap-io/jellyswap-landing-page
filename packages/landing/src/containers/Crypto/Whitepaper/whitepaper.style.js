import styled from 'styled-components';

const WhitepaperWrapper = styled.section`
  padding: 0 0 80px;

  .section-heading {
    margin-top: 80px;
    text-align: left;
  }

  .wp-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
    flex-direction: column;
  }

  .indent {
    margin-left: 40px;
  }
  
`;

const FeatureSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export { WhitepaperWrapper, FeatureSection };
