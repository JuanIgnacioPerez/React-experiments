import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';

var pStyle = {
  padding: '0 30px',
};

var imgStyle = {
  display: 'block',
  width: '400px',
  margin: '0 auto',
};

const Image = styled.img`
  width: 100%;
`;

const Wrapper = styled.section`
  padding: 10px;
  background: papayawhip;
`;

const Title = styled.h3`
  font-size: 24px;
  margin: 10px;
  text-align: center;
  color: black;
`;

const Button = styled.button`
  font-family: 'VT323', monospace;
  color: black;
  font-size: 22px;
  padding: 8px 15px;
  margin-left: 30px;
  border: 2px solid gray;
  border-radius: 3px;
`;

const Input = styled.input`
  color: tomato;
  font-size: 16px;
  margin-left: 30px;
  padding: 5px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Submit = styled.input`
  color: black;
  background: white;
  font-size: 14px;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 3px;
`;

export default class Home extends Component {

  render() {
    return (
      <Container>
        <Image src={require('../assets/hero2.gif')} alt="hero-image" />
        <Wrapper>
          <Title> Hello World, this is my first styled component! </Title>
          <Image style={imgStyle} src={require('../assets/mascot-react.png')} alt="mascot" />
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
          <Button>Normal Button</Button>
          <Input placeholder="text input" type="password" />
          <Submit value="Submit" type="submit" />
        </Wrapper>

      </Container>
    );
  }
}
