import styled from 'styled-components';
import {BgColor} from '../../theme/variables';

export const Background = styled.div`
  position: fixed;
  background-image: url(${require('../../assets/Valknut.png')});
  top: 10vh;
  left: 10vw;
  width: 80vw;
  height: 80vh;
  background-color: ${BgColor};
  opacity: 0.3;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
`;