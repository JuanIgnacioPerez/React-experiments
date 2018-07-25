import React, { Component } from 'react';
import { } from '../App/App.style';
import { Container } from '../../theme/grid';
import { Row, Col } from 'react-bootstrap';
import SimpleMap from '../../components/Map/Map';
import ImageBit from '../../components/ImageBit/ImageBit';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Container>
        <div style={{ marginTop: '40px' }}>
          <SimpleMap />
        </div>

        <Row style={{ paddingTop: '40px', textAlign: 'center' }}>
          <Col sm={6}>
            <ImageBit />
          </Col>
          <Col sm={6}>
            <div className='step-progress'>
              
            </div>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default AboutMe;