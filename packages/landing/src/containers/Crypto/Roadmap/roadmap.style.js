import styled from 'styled-components';

const RoadmapWrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: -webkit-linear-gradient(30deg, #6C5CE7 0%, #F178A6 100%);
  display: block;
  justify-content: center;
  .card {
    z-index: 10;
    width: 240px;
    max-width: 240px;
    height: 280px;
    text-align: center;
    padding: 1.5em 1em 1em;
    margin: 1em;
    border-radius: 24px;
  }
  
  .card-selected {
    z-index: 10;
    background: white;
    color: #6C5CE7;
    border-color: #55efc4;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  .card-unselected {
    z-index: 10;
    background: white;
    margin-top: 50px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .card-icon {
    rgb(83, 96, 127)
  }
  .card-title {
    rgb(51, 51, 94)
  }
  .card-text {
    rgb(83, 96, 127)
  }
  
  .menu-wrapper--inner {
    display: flex;
  }
  
`;
export default RoadmapWrapper;
