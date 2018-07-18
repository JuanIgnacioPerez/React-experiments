import styled, {css} from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

export const HeroImage = styled.div`
  height: 300px;
  margin-top: 45px;
  background-image: url('${require('../../assets/hero2.gif')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction:column;
  justify-content: center;

  text-align:center;
  color: white;

  font-size: 30px;

  h1 {
    margin-bottom: 0;
    color: burlywood;
  }
`;

export const RevealH = styled.h4`
  position: relative;
  &:after {
    content: '  ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: burlywood;

    transform-origin: left;
    transform: rotateY(90deg)
    transition: transform 3s;
  }

  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg)
    }
  `}
`;