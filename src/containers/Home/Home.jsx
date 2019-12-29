import React, { Component } from 'react';
import Layout from '../Layout';

import './Home.css';
import BgImage from '../../components/BgImage';

import posed, { PoseGroup } from 'react-pose';

const CambiaBits = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    x: -50,
    opacity: 0,
    transition: { duration: 150 }
  }

});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    }
    
  }

  componentDidMount() {
      this.setState({
        isVisible: true
      });
  }
  
  render() {

    const {isVisible} = this.state;
    return (

        <section className="Home">
            <BgImage image="RegisterPhone_Background"></BgImage>



            <PoseGroup>
              {isVisible && [
                // If animating more than one child, each needs a `key`
                <CambiaBits key="CambiaBits" >
                  <div className="HomeContent">
                    <div className="HomeContent-CambiaBits">
                      <p className="HomeContent-Title margin-Phone">Compra o vende Bitcoins en tu ciudad</p>
                      <p className="HomeContent-Subtitle mt-2 margin-Phone">De forma fácil, anónima y rapida con la confianza que ofrece un punto físico</p>

                      <div className="download mt-2 margin-Phone">
                        <img src="/images/google-play-badge.png" alt="google-play-badge" className="google-play-badge badge-img"/>
                        <img src="/images/App_Store_Badge.png" alt="App_Store_Badge" className="badge-img"/>
                      </div>

                    </div>
                    <div className="HomeContent-phone">
                      <img src="/images/Phone.png" alt="Phone"/>
                    </div>
                  </div>
                </CambiaBits>
              ]}
            </PoseGroup> 

        </section>

    );
  }
}

export default Layout(Home);