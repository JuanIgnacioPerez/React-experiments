import styled from 'styled-components';
import { Link } from '../../theme/variables';

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;

  & > img {
    transition: transform .3s;
    background-repeat: no-repeat;
  }

  &:hover {
    & > img {
      transform:scale(1.3)
    }
  }
`;

export const Index = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  font-size: 3em;

  h1 {
    margin: 0;
    font-weight: bold;
    color: ${Link};
    opacity: 0.5;
    transform: translateY(20%)
  }
`;

