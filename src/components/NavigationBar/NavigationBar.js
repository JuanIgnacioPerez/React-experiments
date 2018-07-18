import React, { Component } from 'react';
import { NavigationContainer, NavItem } from '../../components/NavigationBar/NavigationBar.style';
import ReallySmothScroll from 'really-smooth-scroll';
import { hashHistory } from 'react-router';

hashHistory.listen(() =>{
  window.scrollTo(0, 0);
});

ReallySmothScroll.shim();

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/aboutMe">About Me</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;