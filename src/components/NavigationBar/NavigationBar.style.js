import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { Menu, LinkColor, Back } from '../../theme/variables';
import { Link } from 'react-router';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 2em;
  top: 1.5em;
  z-index: 999;
`;

export const NavItem = styled(Link)`
  margin-right: 30px;
  font-size: 1.3em;
  cursor: pointer;
  color: ${ Menu };
  position: relative;
  text-decoration: none;

  &:hover {
    color: ${ LinkColor };
    &:after{
      content: ' ';
      position: absolute;
      left: 0;
      top: 3px;
      width: 100%;
      height: 30px;
      background-color: ${ Back };
      z-index: -1;
      transform: scale(1.3, 1.5);
    }
  }
`;
