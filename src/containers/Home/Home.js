import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../../theme/grid';
import {
  Image,
  HeroImage,
  RevealH,
} from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView';
import swal from 'sweetalert';

var pStyle = {
  padding: '0 30px',
};

var imgStyle = {
  display: 'block',
  margin: '0 auto',
  width: '80%',
};

const Wrapper = styled.section`
  padding: 10px;
  background: papayawhip;
`;

const Title = styled.h3`
  font-size: 32px;
  margin: 10px;
  text-align: center;
  color: black;
`;

const Button = styled.button`
  font-family: 'VT323', monospace;
  color: black;
  font-size: 22px;
  padding: 8px 15px;
  margin: 5px 5px 5px 30px;
  border: 2px solid gray;
  border-radius: 3px;
`;

const Input = styled.input`
  color: #009aaf;
  font-size: 16px;
  margin: 5px 5px 5px 30px;
  padding: 5px;
  border: 1px solid #009aaf;
  border-radius: 3px;
  font-style: italic; 
`;

const Submit = styled.input`
  color: white;
  background: #009aaf;
  font-size: 20px;
  margin: 5px 5px 5px 30px;
  padding: 5px 10px;
  border: 1px solid white;
  border-radius: 3px;
  &:hover {
    background: #097f8f;
  }
`;

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
  swal({
    title: "Good job! You clicked the button",
    text: "but isn't not posible process your request rigth now!",
    icon: "success",
    button: "upsss my friend!",
  });
}

function btnClick(e) {
  e.preventDefault();
  console.log('%c Hell yeahh!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
}

export default class Home extends Component {

  render() {
    return (
      <Container>
        <HeroImage>
          <h1>hey!!</h1>
          <h2>What's Up</h2>
        </HeroImage>
        <Wrapper>
          <Title> Hello World, this is my styled component! </Title>
          <Image style={imgStyle} src={require('../../assets/mascot-react.png')} alt="mascot" />

          <p style={pStyle}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce in velit dolor. In et dolor non sapien ultricies hendrerit.
            Maecenas ultricies porttitor est, sit amet eleifend sem egestas ut.
            Cras eget imperdiet est. Cras viverra ligula urna, eget rutrum erat lacinia nec.
            Praesent nec libero accumsan turpis molestie dapibus. Mauris scelerisque ligula sed felis ultricies,
            ut efficitur orci dignissim. Nam eleifend ligula sit amet congue dapibus. Vestibulum ut nisi vel quam
            luctus mollis vel ac mi. Vivamus pellentesque finibus sapien quis convallis. Donec at interdum mi.
            Sed finibus sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia. Integer commodo blandit quam,
            ut blandit quam pretium eget.
          </p>
          <Button onClick={btnClick}>Normal Button</Button>
          <Input placeholder="text input pass" type="password" />

          <Submit value="Submit" type="submit" onClick={handleClick} />

          <WhenInView>
            {({ isInView }) =>
              <RevealH hide={!isInView}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce in velit dolor. In et dolor non sapien ultricies hendrerit.
              </RevealH>
            }
          </WhenInView>

          <WhenInView>
            {({ isInView }) =>
              <RevealH hide={!isInView}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce in velit dolor. In et dolor non sapien ultricies hendrerit.
                Maecenas ultricies porttitor est, sit amet eleifend sem egestas ut.
              </RevealH>
            }
          </WhenInView>

          <WhenInView>
            {({ isInView }) =>
              <RevealH hide={!isInView}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce in velit dolor. In et dolor non sapien ultricies hendrerit.
                Maecenas ultricies porttitor est, sit amet eleifend sem egestas ut.
                Cras eget imperdiet est. Cras viverra ligula urna, eget rutrum erat lacinia nec.
              </RevealH>
            }
          </WhenInView>

        </Wrapper>
      </Container>

    );
  }
}
