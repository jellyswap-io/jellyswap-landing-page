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
`;
export default RoadmapWrapper;
