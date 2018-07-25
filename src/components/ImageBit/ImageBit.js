import React, { Component } from 'react';
import Image8Bit from 'react-8bit';

class ImageBit extends Component {
  render() {
    const imgSrc = 'https://images.unsplash.com/photo-1487865127380-aab'
      + '78e2bf64a?dpr=2&auto=compress,format&fit=crop&w=767&h=1151&q=80&'
      + 'cs=tinysrgb&crop=';
    return (
      <div>
        <Image8Bit
          style={{ width: 300 }}
          scaleFactor={5}
          src={imgSrc}
        />
      </div>
    );
  }
}

export default ImageBit;