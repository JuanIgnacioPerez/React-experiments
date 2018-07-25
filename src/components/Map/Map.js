import React, { Component } from 'react';
import { MapText } from '../Map/Map.style';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text, icon }) =>
  <div>
    <i className={icon}
      style={{ color: '#ed143d', zIndex: 99, fontSize: '35px' }}>
    </i>
    <MapText>
      <p>{text} <i className="fa fa-building" style={{ color: '#666'}}></i></p>
    </MapText>
  </div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 6.217660,
      lng: -75.570702
    },
    zoom: 16
  };
  render() {
    return (
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={6.217660}
            lng={-75.570702}
            text={'Tech & solve Medellín'}
            icon={"fa fa-map-signs"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;