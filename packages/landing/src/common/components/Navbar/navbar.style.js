import styled from 'styled-components';
import {
  display,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  boxShadow,
  color,
  space,
  borderRadius,
  width,
  height,
} from 'styled-system';

const NavbarStyle = styled.nav`
  /* Navbar default style goes here */
  display: flex;
  align-items: center;
  min-height: 56px;
  padding: 10px 16px;

  @media (min-width: 991px) {
    .link-container {
      width: 60%;
      position: absolute;
      right: -10%;
      height: 80%;
      margin-top: 25px;
      border-radius: 50px;
      background-color: white;
      color: black;
    }
  }

  /* Style system supported prop */
  ${display}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
  ${width}
  ${height}
  ${color}
  ${space}
  ${boxShadow}
  ${borderRadius}
`;

NavbarStyle.displayName = 'NavbarStyle';

export default NavbarStyle;
