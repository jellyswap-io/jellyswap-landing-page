import styled from 'styled-components';

const mascotWrapper = styled.section`
  .jellyBread {
    position: absolute;
    top: 10.5px;
    left: 10.5px;
    transform: rotate(
            -30deg
    );
    height: 180px;
    min-height: 180px;
    width: 180px;
    min-width: 180px;
    background: url("jelly&bread.png");
    z-index: -1;
    opacity: 0.6;
  }
`;
export { mascotWrapper };
