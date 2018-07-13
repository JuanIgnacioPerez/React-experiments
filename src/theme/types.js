import styled from 'styled-components';
import {Link, BgColor} from '../theme/variables'

export const A = styled.a`
  color: ${Link};
  text-decoration: none;
  position: relative;

  &:after {
    content: '  ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10%;
    width:100%;
    background-color: ${Link};
    z-index: -1;
    transition: height .1s, background-color .1s;
  }

  &:hover:after {
    height: 40%;
    background-color: ${BgColor};
    opacity: 0.7;
  }
`;
