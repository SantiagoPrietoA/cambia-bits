import React, { Component } from 'react';
import Layout from '../Layout';

import ReactScrollWheelHandler from "react-scroll-wheel-handler";



import './Us.css';

import posed, { PoseGroup } from 'react-pose';

const UsSection = posed.div({
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



const UsImageEasy = posed.div({

  enter: {
    y: 0,
    x: -0,
    opacity: 1,
    delay: 300,
  },
  exit: {
    y: 200,
    x: -200,
    opacity: 0,
    transition: { duration: 1000 }
  }

});

const UsImageFast = posed.div({

  enter: {
    y: 0,
    x: -0,
    opacity: 1,
    delay: 300,
  },
  exit: {
    y: -200,
    x: -200,
    opacity: 0,
    transition: { duration: 1000 }
  }

});


const UsImageSafer = posed.div({

  enter: {
    y: 0,
    x: -0,
    opacity: 1,
    delay: 300,
  },
  exit: {
    y: 200,
    x: 200,
    opacity: 0,
    transition: { duration: 1000 }
  }

});

const UsImageAnonymous = posed.div({

  enter: {
    y: 0,
    x: -0,
    opacity: 1,
    delay: 300,
  },
  exit: {
    y: 200,
    x: -200,
    opacity: 0,
    transition: { duration: 1000 }
  }

});

const Item = posed.div({
  stepOne: {
    backgroundColor: '#40088B',
  },
  stepTwo: {
    backgroundColor: '#04C356',
  },
  stepThree: {
    backgroundColor: '#136CDF',
  },
  stepFour: {
    backgroundColor: '#3B168F',
  },
});

const ItemCircle = posed.div({
  stepOne: {
    scale: 1,
    borderColor: '#40088B',
    top: "-10px",
    
    transition: { duration: 700 }

  },
  stepTwo: {
    scale: 1,
    top: "40px",
    borderColor: '#04C356',    
    transition: { duration: 700 }
  },
  stepThree: {
    top: "90px",
    borderColor: '#136CDF',
    transition: { duration: 700 }
  },
  stepFour: {
    top: "140px",
    borderColor: '#3B168F',
    transition: { duration: 700 }
  },
});


class Us extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentIndex: -1,
    };

    this.into = false;
    

    
  }

  componentDidUpdate() {
    this.gradientChange()

    if( this.into ){
      document.getElementById('circleItem').classList.add("circleItemAnimated")
      setTimeout(function(){
              document.getElementById('circleItem').classList.remove("circleItemAnimated")

      }, 700);
    }else  {
      this.into = true;
    }

  }

  componentDidMount() {
      this.setState({
        currentIndex: 0
      });
  }

  gradientChange() {
     switch (this.state.currentIndex){
      case 0:
      document.getElementById("ImageUs").style.backgroundPosition = "100% 100%"
        break;

      case 1:
      document.getElementById("ImageUs").style.backgroundPosition = "66.6% 66.6%"
        break;

      case 2:
      document.getElementById("ImageUs").style.backgroundPosition = "33.3% 33.3%"
        break;

      case 3:
      document.getElementById("ImageUs").style.backgroundPosition = "0% 0%"
        break;

      default: 
        break;
    }
  }

  clickChange(e) {
    switch (e.target.id){
      case "1":
      
        this.setState({ currentIndex: 0})

        break;

      case "2":
         this.setState({ currentIndex: 1})
        break;

      case "3":
         this.setState({ currentIndex: 2})
        break;

      case "4":
        this.setState({ currentIndex: 3})
        break;

      default: 
        break;
    }

    
    

  }

  nextIndex = () => {
        const { currentIndex } = this.state;
        switch (currentIndex){
          case 0:
            this.setState({currentIndex: currentIndex + 1})
           
            break;

          case 1:
            this.setState({currentIndex: currentIndex + 1})
            break;

          case 2:
            this.setState({currentIndex: currentIndex + 1})
            break;

          case 3:
            this.setState({currentIndex: 3})
            break;

          default: 
            break;
        }

        window.scrollTo(0,0)
    };
 
    prevIndex = () => {
        const {  currentIndex } = this.state;
        switch (currentIndex){
          case 0:
            this.setState({currentIndex: 0})           
            break;

          case 1:
            this.setState({currentIndex: currentIndex - 1})
            break;

          case 2:
            this.setState({currentIndex: currentIndex - 1})
            break;

          case 3:
            this.setState({currentIndex: currentIndex - 1})
            break;

          default: 
            break;
        }

        window.scrollTo(0,0)
    };

  
  
  firstSection = () => {
    return(

        <div className="UsContent-CambiaBits">
          <p className="UsContent-Title">Cambia<label className="UsContent-Bits">Bits</label> es Fácil</p>
          <p className=" mt-2">Solo tienes que descargar la app, seleccionar el monto a vender o comprar, y reclamar tu dinero en un punto CambiaBits.</p>
          <p className=" mt-1">Nuestros puntos autorizados están dispuestos a solucionarte todas tus dudas durante el proceso.</p>

        </div>     

    )
  }

  secondSection = () => {
    return(

        <div className="UsContent-CambiaBits">
          <p className="UsContent-Title">Cambia<label className="UsContent-Bits">Bits</label> es Rápido</p>
          <p className=" mt-2">Te impresionará la velocidad con la que puedes entrar al mundo del Bitcoin, como si fueras a comprar dulces en una tienda.</p>

        </div>     

    )
  }

  thirdSection = () => {
    return(

        <div className="UsContent-CambiaBits">
          <p className="UsContent-Title">Cambia<label className="UsContent-Bits">Bits</label> es Seguro</p>
          <p className=" mt-2">Nuestros puntos autorizados cumplen con todas las normativas exigidas por la ley.</p>
          <p className=" mt-1">Nuestros procedimientos garantizan que nunca perderás tu dinero durante una tnasacción en CambiaBits.</p>

        </div>     

    )
  }

  quarterSection = () => {
    return(

        <div className="UsContent-CambiaBits">
          <p className="UsContent-Title">Cambia<label className="UsContent-Bits">Bits</label> es Anónimo</p>
          <p className=" mt-2">Nunca te solicitaremos datos personales para realizar una transacción con nosotros, nuestro mecanismo de seguridad no los necesita</p>

        </div>     

    )
  }

  renderSection = () => {
    
    switch (this.state.currentIndex){
      case 0: 
        return this.firstSection();

      case 1:
        return this.secondSection();

      case 2:
        return this.thirdSection();

      case 3:
        return this.quarterSection();

      default: 
        return this.firstSection();
    }
  }

  step = () => {
    switch (this.state.currentIndex){
      case 0:
      
        return "stepOne";

      case 1:
        return "stepTwo";

      case 2:
        return "stepThree";

      case 3:
        return "stepFour";

      default: 
        return "stepOne";
    }

  }

 
 

  render() {

    const { currentIndex } = this.state;

    return( 
      <ReactScrollWheelHandler

        className="outline-none"
        upHandler={this.prevIndex}
        downHandler={this.nextIndex}
      >
        <section className="Us">        
          <div className="menu">
            <ItemCircle className="circleItem" id="circleItem" pose={this.step()}></ItemCircle>
            <Item className="item" id="1" onClick={(e) => this.clickChange(e)} pose={this.step()}></Item>
            <Item className="item" id="2"  onClick={(e) => this.clickChange(e)} pose={this.step()}></Item>
            <Item className="item" id="3"  onClick={(e) => this.clickChange(e)} pose={this.step()}></Item>
            <Item className="item" id="4"  onClick={(e) => this.clickChange(e)} pose={this.step()}></Item>
          </div>


          <div className="ImageUs" id="ImageUs">

            <img src="/images/transparent.png" alt="" className="ImageTransparent"/>
            <PoseGroup>
              {currentIndex === 0 && [                     
                <UsImageEasy key="us1" className="imgContainer" >
                <img src="/images/Easy_Graphic.png" alt="" className="ImageUs-image" />
                </UsImageEasy>
              ]}
            </PoseGroup>

            <PoseGroup>
              {currentIndex === 1 && [                     
                <UsImageFast key="us2"  className="imgContainer">
                <img src="/images/Fast_Graphic.png" alt="" className="ImageUs-image-coin" />
                </UsImageFast>
              ]}
            </PoseGroup>

            <PoseGroup>
              {currentIndex === 2 && [                     
                <UsImageSafer key="us3" className="imgContainer" >
                <img src="/images/Safer_Graphic.png" alt="" className="ImageUs-image" />
                </UsImageSafer>
              ]}
            </PoseGroup>

            <PoseGroup>
              {currentIndex === 3 && [                     
                <UsImageAnonymous key="us4" className="imgContainer" >
                <img src="/images/Anonymous_Graphic.png" alt="" className="ImageUs-image" />
                </UsImageAnonymous>
              ]}
            </PoseGroup>  
          
          </div>
          


          <PoseGroup>
            {currentIndex === 0 && [                   
              <UsSection key="us1" startX >
              { this.firstSection()}
              </UsSection>
            ]}
          </PoseGroup> 

          <PoseGroup>
            {currentIndex === 1 && [                   
              <UsSection key="us2"  >
              { this.secondSection()}
              </UsSection>
            ]}
          </PoseGroup>

          <PoseGroup>
            {currentIndex === 2 && [                   
              <UsSection key="us3"  >
              { this.thirdSection()}
              </UsSection>
            ]}
          </PoseGroup>

          <PoseGroup>
            {currentIndex === 3 && [                   
              <UsSection key="us4"  >
              { this.quarterSection()}
              </UsSection>
            ]}
          </PoseGroup>   

        </section>

      </ReactScrollWheelHandler>
    )
  }
}

export default Layout(Us);