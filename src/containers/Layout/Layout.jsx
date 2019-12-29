import React, { Component } from 'react';

import Header from '../../components/Header';


export default MainContent =>
  class extends Component {

      renderComponent() {        
        return <MainContent />;
      }
      
     
    
   
    render() {
        return (
            <section className="MainContent">

              <Header />
              { this.renderComponent() }
            </section>
        );
    }
  };
