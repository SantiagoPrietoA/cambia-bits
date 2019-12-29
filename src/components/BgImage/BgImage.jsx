import React, { Component } from 'react';
import './BgImage.css';


class BgImage extends Component {

  constructor(props) {
    super(props); 
    this.state = { isVisible: true }   
  }


  render() {
    return (
      <div className="BgImage" id="BgImage">
        <img src={`/images/${this.props.image}.png`} className="bgImage-Image" alt=""/>
      </div>
    );
  }
}

export default BgImage;