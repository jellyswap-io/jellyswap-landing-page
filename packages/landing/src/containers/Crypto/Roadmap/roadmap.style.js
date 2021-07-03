import styled from 'styled-components';

const RoadmapWrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  //background-color: #ff7675;
  background-image: -webkit-linear-gradient(29deg, #ff7675 0%, #fd79a8 100%);
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    width: 320px;
    max-width: 240px;
    height: 280px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: center;
    padding: 1.5em 1em 1em;
    margin: 1em;
    box-shadow: rgb(186 186 186 / 40%) 0px 4px 16px;
    border-radius: 24px;
  }
  
  .card-selected {
    background: white;
    border-color: #55efc4;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
  }
  
  .card-unselected {
    background: white;
    margin-top: 50px;
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
