import React, { Component } from 'react';
import Layout from '../Layout';

import './Support.css';
import BgImage from '../../components/BgImage';
import ContactUs from '../../components/ContactUs';

import posed, { PoseGroup } from 'react-pose';

const Questions = posed.div({
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

const Question1 = posed.div({
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


class Support extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 0,
      isVisible: false,
      isVisible1: false,
    }
    
  }


  changeState = () => {
     this.setState({ isVisible: !this.state.isVisible });
  }

  componentDidMount() {
    document.getElementById('BgImage').classList.add('BgImage-none');
    //  setInterval(() => {
      this.setState({
        isVisible: true
      });
    // }, 2000);
  }

  changeQuestion(e) {
    switch (e.target.id) {
      case "0":
         this.setState({
            isVisible: true,
            question: 0
          });
        break;
     case "1":
         this.setState({
            isVisible: false,
            question: 1
          });
        break;
      case "2":
         this.setState({
            isVisible: false,
            question: 2
          });
        break;
      case "3":
         this.setState({
            isVisible: false,
            question: 3
          });
        break;
      case "4":
         this.setState({
            isVisible: false,
            question: 4
          });
        break;
      case "5":
         this.setState({
            isVisible: false,
            question: 5
          });
        break;
      case "6":
         this.setState({
            isVisible: false,
            question: 6
          });
        break;
      case "7":
         this.setState({
            isVisible: false,
            question: 7
          });
        break;
      default:
        break;
    } 

    
  }

  renderQuestions() {
    return(
      <section className="Support">            

           <div className="SupportContent">

            <div className="SupportContent-Questions">
              <p className="SupportContent-Title">Preguntas frecuentes</p>
              <div className="Questions">
                <p className="SupportQuestion mt-3 pointer" id="1" onClick={(e) => this.changeQuestion(e)}>¿Que es Bitcoin?</p>
                <p className="SupportQuestion pointer" id="2" onClick={(e) => this.changeQuestion(e)}>¿Que puedo hacer con Bitcoin?</p>
                <p className="SupportQuestion pointer" id="3" onClick={(e) => this.changeQuestion(e)}>¿A cuanto equivale 1 BTC?</p>
                <p className="SupportQuestion pointer" id="4" onClick={(e) => this.changeQuestion(e)}>¿Como funciona la app?</p>
                <p className="SupportQuestion pointer" id="5" onClick={(e) => this.changeQuestion(e)}>¿Por qué CambiaBits es anonimo?</p>
                <p className="SupportQuestion pointer" id="6" onClick={(e) => this.changeQuestion(e)}>¿CambiaBits es legal?</p>
                <p className="SupportQuestion pointer" id="7" onClick={(e) => this.changeQuestion(e)}>¿Siempre debo ir a un punto autorizado?</p>
              </div>
            </div>

            
           </div>

      </section>

        
    )
  }

  renderFirstQuestion() {
    return(
      <section className="Support animated bounce">         

           <div className="SupportContent">

            <div className="SupportContent-Questions">
              <div className="contentTitle">
                <p className="SupportContent-Title" >
                  ¿Que es Bitcoin?
                </p>
              </div>
              <p>Bitcoin es la primera moneda digital descentralizada del mundo, 
                puede ser usado para adquirir/intercambiar bienes y servicios como
                cualquier otra divisa conocida (Dólar, Euro, etc). Permite realizar
                pagos de forma segura, barata, rápida y libre alrededor de todo el planeta.
              </p>
              <p><strong>Bitcoin: </strong>se refiere a la red de transacciones; puede ser usada para 
                aplicaciones de todo tipo; en las transacciones se envían bitcoins; todas 
                las transacciones son guardadas pseudónimamente en la <i>blockchain</i>.
              </p>
              <p><strong>Bitcoin: </strong>(BTC) unidad de cuenta de la red Bitcoin; jamás existirán 
                más de 21 millones y se irán creando durante los siguientes 100 años; 
                su cotización fluctúa por la oferta y la demanda.
              </p>
              <p><strong>Satoshis: </strong>cada bitcoin es divisible en 100 millones de unidades, 
                  estas unidades son conocidas como satoshis.
              </p>
              <p><strong>Blockchain: </strong>libro de cuentas público y distribuido donde todas las transacciones 
                bitcoin (y sus saldos) son almacenados de forma permanente. Gracias a la “minería”, blockchain es 
                conocida como la base de datos más segura y veraz que existe.
              </p>
              <p><strong>Minería: </strong>proceso por el cual las transacciones de la red Bitcoin son verificadas; 
                para ello se utilizan técnicas avanzadas de criptografía y hardware especializado (“mineros”): 
                una cantidad fija de bitcoins son creados (“minados”) durante el proceso.
              </p>
              <p>Bitcoin está descentralizado, es decir, no hay ningún individuo ni grupo específico que controle 
              el libro de contabilidad. Con Bitcoin, todos los computadores que participan en el sistema guardan una 
              copia del libro de contabilidad también conocido como <strong>Blockchain</strong>.
              </p>
              <p>Por lo tanto, si quisieras atacar el sistema de Bitcoin o piratear su libro de contabilidad
               tendrás que atacar miles de ordenadores que mantienen una copia actualizada constantemente. 
               Con lo cual es un sistema exponencialmente más seguro que el de cualquier banco del mundo. 
               Ya que no hay un punto centralizado de vulnerabilidad.
              </p>
              <p>Otras características:
              </p>
              <ul>
                <li>No pertenece a ningún Estado o país y puede usarse en todo el mundo por igual.</li>
                <li>Puedes comprar bitcoins con dólares u otras divisas y viceversa, como cualquier moneda.</li>
                <li>Es imposible su falsificación o duplicación gracias a un sofisticado sistema criptográfico.</li>
                <li>Las transacciones son irreversibles.</li>
                <li>No es necesario revelar tu identidad al hacer negocios y preserva tu privacidad.</li>
                <li>El dinero te pertenece al 100%; no puede ser intervenido por nadie ni las cuentas pueden ser congeladas.</li>
              </ul>
           </div>
            <div className="back" >
              <div id="0" className="btn-back" onClick={(e) => this.changeQuestion(e)}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" className="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
                  Volver
              </div>
            </div>
           </div>           
      </section>
        
    )
  }

   renderSecondQuestion() {
    return(
      <section className="Support animated bounce">         

           <div className="SupportContent">

            <div className="SupportContent-Questions">
              <p className="SupportContent-Title pointer" >
                ¿Qué puedo hacer con Bitcoin?</p>
              <p>Con Bitcoin puedes adquirir cualquier tipo de bienes o servicios comunes, cada día se suman más y 
                más personas, empresas y demás comercios que reciben Bitcoin como medio de pago. Entre los bienes y 
                servicios que puedes adquirir con Bitcoin se encuentran:
              </p>
             
              <ul>
                <li>Comercio electrónico</li>
                <li>Productos electrónicos</li>
                <li>Contenido digital</li>
                <li>Turismo, reservas de vuelos y hoteles</li>
                <li>Entradas a teatros y eventos</li>
                <li>Restaurantes</li>
                <li>Causas benéficas</li>
                <li>Educación</li>
              </ul>
              <p>De igual forma puedes comprarlo y venderlo para obtener rentabilidad aprovechando su fluctuación y 
                  el intercambio de divisas.
              </p>
           </div>
           <div className="back" >
              <div id="0" className="btn-back" onClick={(e) => this.changeQuestion(e)}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" className="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
                  Volver
              </div>
            </div>
          </div>           
      </section>
        
    )
  }

  renderThirdQuestion() {
    return(
      <section className="Support animated bounce">         

           <div className="SupportContent">

            <div className="SupportContent-Questions">
              <p className="SupportContent-Title pointer" >
                ¿A Cuanto equivale 1 Bitcoin (BTC)?</p>
              <p>El precio de un bitcoin lo determina todo aquel que quiera participar en su proceso de compra – venta, en esencia sus usuarios. Esto es,
               lo que en última instancia, determina siempre el precio del bitcoin, aunque para ello múltiples factores influyan.
              </p>
              <p>El comercio de bitcoins permite distribuirlo y beneficiarse por ello. Como en otros escenarios, los productores
               (en el caso de Bitcoin: los mineros) pueden proponer un precio al vender sus bitcoins a los interesados llegando a acuerdos.
              </p>
              <p>De acuerdo a la oferta y demanda y gracias a las diversas plataformas de trading que existen los precios tienden a 
              stabilizarse, puedes monitorear el precio medio del bitcoin en plataformas como: <strong>coinmarketcap</strong></p>
           </div>
           <div className="back" >
              <div id="0" className="btn-back" onClick={(e) => this.changeQuestion(e)}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" className="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
                  Volver
              </div>
            </div>
          </div>           
      </section>
        
    )
  }

  renderQuarterQuestion() {
    return(
      <section className="Support animated bounce">         

           <div className="SupportContent">

            <div className="SupportContent-Questions">
              <p className="SupportContent-Title pointer" >
                ¿Cómo funciona la App?
              </p>
              <p>CambiaBits funciona como una casa de cambio en la que puedes comprar y vender bitcoins, inicia tu operación de compra o venta, el sistema calculará la cantidad exacta de Bitcoins que recibirás por el monto que hayas estable
               cuánto recibirás  por la cantidad en Bitcoin que deseas vender teniendo siempre como base el precio medio oficial del bitcoin
                (TRM).
              </p>
              <p>Acércate a uno de nuestros puntos CambiaBits autorizados para terminar el proceso y listo, obtén lo que esperas de
               manera rápida, fácil, confiable y segura.
              </p>
           </div>
           <div className="back" >
              <div id="0" className="btn-back" onClick={(e) => this.changeQuestion(e)}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" className="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
                  Volver
              </div>
            </div>
          </div>           
      </section>
    )

  }

  renderFifthQuestion() {
    return(
      <section className="Support animated bounce">         

           <div className="SupportContent">

            <div className="SupportContent-Questions">
              <p className="SupportContent-Title pointer" >
                ¿Por qué CambiaBits es Anónimo?
              </p>
              <p>Gracias a la naturaleza del Bitcoin que ofrece total privacidad dentro de su libro contable 
              (blockchain) y debido a las pocas exigencias en cuanto al suministro de datos por parte de 
              los usuarios a la plataforma CambiaBits, podemos garantizar cierto grado de anonimato.
              </p>
           </div>
           <div className="back" >
              <div id="0" className="btn-back" onClick={(e) => this.changeQuestion(e)}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" className="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
                  Volver
              </div>
            </div>
          </div>           
      </section>
    )

  }

  renderSixthQuestion() {
    return(
      <section className="Support animated bounce">         

           <div className="SupportContent">

            <div className="SupportContent-Questions">
              <p className="SupportContent-Title pointer" >
                ¿CambiaBits es legal?
              </p>
              <p>CambiaBits es un producto desarrollado por WOLDEV S.A.S, una empresa legalmente constituida y facultada
               para ofrecer este servicio que cumple con todas las exigencias legales establecidas por el estado colombiano
                para su funcionamiento.
              </p>
           </div>
           <div className="back" >
              <div id="0" className="btn-back" onClick={(e) => this.changeQuestion(e)}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" className="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
                  Volver
              </div>
            </div>
          </div>           
      </section>
    )

  }

   renderSeventhQuestion() {
    return(
      <section className="Support animated bounce">         

           <div className="SupportContent">

            <div className="SupportContent-Questions">
              <div className="contentTitle">
                <p className="SupportContent-Title pointer" >
                  ¿Siempre debo ir a un punto autorizado?
                </p>
              </div>
              <p>CambiaBits tiene como objetivo garantizar seguridad y generar confianza en sus usuarios a 
              la hora de comprar y/o vender sus Bitcoins, por lo que el factor presencial se hace
               importante y en consecuencia es necesario que te acerques a nuestros puntos CambiaBits
                autorizados alrededor del país para efectuar tu operación con éxito.
              </p>
           </div>
              <div className="back" >
              <div id="0" className="btn-back" onClick={(e) => this.changeQuestion(e)}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" className="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
                  Volver
              </div>
            </div>
          </div>           
      </section>
    )

  }

  componentWillUnmount() {
    document.getElementById('BgImage').classList.remove('BgImage-none');

  }

  render() {

     const { isVisible } = this.state;
      return (

        <div>
          < BgImage image="Support_Background"></BgImage>     
          <div className="header-Support"></div>

        <PoseGroup>
        {isVisible && [
          <Questions key="shade" className="shade" >
          {this.renderQuestions()}
          </Questions>
        ]}
      </PoseGroup> 

      <PoseGroup>
        {this.state.question === 1 && [
          <Question1 key="renderFirstQuestion" className="renderFirstQuestion" >
           {this.renderFirstQuestion()}
          </Question1>
        ]}
      </PoseGroup>  
      <PoseGroup>
        {this.state.question === 2 && [
          <Question1 key="renderFirstQuestion" className="renderFirstQuestion" >
           {this.renderSecondQuestion()}
          </Question1>
        ]}
      </PoseGroup> 
      <PoseGroup>
        {this.state.question === 3 && [
          <Question1 key="renderFirstQuestion" className="renderFirstQuestion" >
           {this.renderThirdQuestion()}
          </Question1>
        ]}
      </PoseGroup>
      <PoseGroup>
        {this.state.question === 4 && [
          <Question1 key="renderFirstQuestion" className="renderFirstQuestion" >
           {this.renderQuarterQuestion()}
          </Question1>
        ]}
      </PoseGroup>
      <PoseGroup>
        {this.state.question === 5 && [
          <Question1 key="renderFirstQuestion" className="renderFirstQuestion" >
           {this.renderFifthQuestion()}
          </Question1>
        ]}
      </PoseGroup>
      <PoseGroup>
        {this.state.question === 6 && [
          <Question1 key="renderFirstQuestion" className="renderFirstQuestion" >
           {this.renderSixthQuestion()}
          </Question1>
        ]}
      </PoseGroup>
      <PoseGroup>
        {this.state.question === 7 && [
          <Question1 key="renderFirstQuestion" className="renderFirstQuestion" >
           {this.renderSeventhQuestion()}
          </Question1>
        ]}
      </PoseGroup>
          <ContactUs ></ContactUs>
        </div>

        
      );
   
  }
}

export default Layout(Support);