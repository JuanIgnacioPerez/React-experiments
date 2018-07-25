import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {Background} from '../App/App.style';
import { ImageButton, Index } from '../Projects/Projects.style';
import { Container, Relative, Flex } from '../../theme/grid';
import { A } from '../../theme/types';
import Modalita from '../../components/Modal/Modal';
import axios from 'axios';

class Projects extends Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    console.log('%c Rock & Roll! ', 'background: #222; color: #bada55; font-size: 30px');
    axios.get('http://localhost:5000/data')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Background />
        <Container>
          <Relative marginBottom='50px'>
            <Index>
              <h1>01</h1>
            </Index>
            <h1>click on the image and <br /><A style={{ cursor: 'pointer' }}> look at the magic</A></h1>
          </Relative>
          <Flex justify={'center'}>
            <Zoomy
              imageUrl={require('../../assets/viking.jpg')}
              renderThumbnail={({ showImage }) =>
                <ImageButton alt='thumb' onClick={showImage}>
                  <img src={require('../../assets/viking_thumbnail.jpg')} alt="thumb" />
                </ImageButton>
              }
              scale={[1.1, 1.1]}
              imageProps={{
                style: {
                  width: '100vw',
                  height: 'auto'
                }
              }}
            />
          </Flex>

          <Modalita />

          <div style={{ padding: '30px 0' }}>
            {this.state.persons.map(person =>
              <div className="row list-info">
                <li key={person.id} className="col-sm-6">{person.username}  ---- ></li>
                <li key={person.city} className="col-sm-6">{person.email}</li>
              </div>
            )}
          </div>

        </Container>
      </div>
    );
  }
}

export default Projects;