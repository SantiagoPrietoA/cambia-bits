import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';


class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Header-container">
          <div className="Header-logoContainer">
            <Link to="/" className="Header-buttonLogo">              
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.64 20.66"><title>CambiaBits_Icon</title><g id="CambiaBits_Icon"><path id="B" d="M22.3,14a5.34,5.34,0,0,0-1.93-5.1h0a6.39,6.39,0,0,0,2.16-3.51A4.27,4.27,0,0,0,18.22,0h-.55A2.81,2.81,0,0,1,18,1.94a3.89,3.89,0,0,1-1,1.93,3.88,3.88,0,0,1-2.81,1.29H9A2.42,2.42,0,0,0,6.73,7.1L5.59,13.55a1.59,1.59,0,0,0,1.6,1.94h5.16a2.66,2.66,0,0,1,2.36,1.29,2.85,2.85,0,0,1,.3,1.94,3.87,3.87,0,0,1-1,1.93h.55A8.09,8.09,0,0,0,22.3,14Zm-9.49-4.6H10.74l-.13.78c0,.17-.25.25-.34.13L8.83,8.52a.18.18,0,0,1,0-.26l2.06-1.75c.14-.12.32,0,.29.13l-.13.78h2.06a.22.22,0,0,1,.22.27l-.25,1.4A.32.32,0,0,1,12.81,9.36Zm4.13,3-2.06,1.74c-.13.12-.32,0-.29-.13l.14-.77H12.66a.22.22,0,0,1-.22-.27l.25-1.4A.33.33,0,0,1,13,11.3h2.06l.14-.78c0-.16.24-.25.34-.13L17,12.13A.2.2,0,0,1,16.94,12.4Z" fill="#1785c4"/><path id="C" d="M13.73,18.66a2.41,2.41,0,0,1-1.11,1.64,2.21,2.21,0,0,1-1.18.36H4.31A4.19,4.19,0,0,1,.08,15.52L1.91,5.13A6.4,6.4,0,0,1,8,0h7.13a1.62,1.62,0,0,1,1.13.42,1.61,1.61,0,0,1,.48,1.41,2.44,2.44,0,0,1-2.35,2H8a2.43,2.43,0,0,0-2.29,2l-1.59,9a1.59,1.59,0,0,0,1.61,1.94h6.39A1.61,1.61,0,0,1,13.73,18.66Z" fill="#2e3a47"/></g></svg>
                <svg className="HeaderTitle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.79 14.22"><title>CambiaBits_Title</title><g id="CambiaBits_Title"><path d="M84.93,8.67a2.44,2.44,0,0,1,.43,1.45A3.19,3.19,0,0,1,83.81,13a7.36,7.36,0,0,1-4,1H73.09L75.52,1.81h6.15a5.5,5.5,0,0,1,3.14.74A2.38,2.38,0,0,1,85.9,4.66a3,3,0,0,1-.57,1.83,3.81,3.81,0,0,1-1.6,1.21A2.71,2.71,0,0,1,84.93,8.67Zm-3.52,2.46a1.25,1.25,0,0,0,.53-1.08.87.87,0,0,0-.39-.78,1.92,1.92,0,0,0-1-.25h-3L77,11.49h3A2.49,2.49,0,0,0,81.41,11.13Zm-3-6.84L78,6.64h2.46a2.29,2.29,0,0,0,1.4-.36,1.19,1.19,0,0,0,.48-1q0-1-1.44-1Z" fill="#1b86c5"/><path d="M88.18,4.55h3.28L89.58,14H86.3ZM88.91,3a1.5,1.5,0,0,1-.53-1.16A1.74,1.74,0,0,1,89,.53,2.19,2.19,0,0,1,90.5,0a2.13,2.13,0,0,1,1.4.44,1.46,1.46,0,0,1,.52,1.14A1.81,1.81,0,0,1,91.83,3a2.22,2.22,0,0,1-1.55.54A2,2,0,0,1,88.91,3Z" fill="#1b86c5"/><path d="M96.1,10.46c0,.17,0,.27,0,.32,0,.53.29.8.87.8a2.2,2.2,0,0,0,1-.28l.41,2.28a4.86,4.86,0,0,1-2.45.55,3.47,3.47,0,0,1-2.32-.73,2.52,2.52,0,0,1-.86-2,3.94,3.94,0,0,1,.09-.89l.63-3.11H92l.5-2.47h1.37l.49-2.45h3.3L97.21,4.9h2.14l-.48,2.47H96.73Z" fill="#1b86c5"/><path d="M100.84,13.87a5.53,5.53,0,0,1-1.75-.66l1.2-2.31a5.33,5.33,0,0,0,1.53.63,6.63,6.63,0,0,0,1.74.24c1,0,1.51-.23,1.51-.68,0-.19-.12-.32-.36-.41a6,6,0,0,0-1.13-.25,13.34,13.34,0,0,1-1.72-.41,2.81,2.81,0,0,1-1.17-.74,2,2,0,0,1-.5-1.46,2.83,2.83,0,0,1,1.4-2.53,6.67,6.67,0,0,1,3.62-.89,9,9,0,0,1,2,.2,6.36,6.36,0,0,1,1.63.55l-1.16,2.31a5.28,5.28,0,0,0-2.8-.72,2.56,2.56,0,0,0-1.14.2.6.6,0,0,0-.37.52c0,.18.11.32.35.41a9.08,9.08,0,0,0,1.18.28,11.79,11.79,0,0,1,1.67.4,2.81,2.81,0,0,1,1.17.75,2,2,0,0,1,.49,1.43,2.84,2.84,0,0,1-1.4,2.52,6.67,6.67,0,0,1-3.6.88A10.55,10.55,0,0,1,100.84,13.87Z" fill="#1b86c5"/><path d="M2.89,13.55A4.94,4.94,0,0,1,.75,11.66,5.2,5.2,0,0,1,0,8.87,7.38,7.38,0,0,1,1,5.11,6.88,6.88,0,0,1,3.67,2.5a8.27,8.27,0,0,1,4-.94,7.09,7.09,0,0,1,3,.6,4.24,4.24,0,0,1,2,1.7l-2.49,2A2.93,2.93,0,0,0,7.41,4.42,3.88,3.88,0,0,0,5.35,5,3.76,3.76,0,0,0,4,6.48a4.64,4.64,0,0,0-.49,2.16,2.56,2.56,0,0,0,.8,2,3,3,0,0,0,2.17.75,3.81,3.81,0,0,0,3-1.41l2,2a5.83,5.83,0,0,1-2.32,1.73,8.13,8.13,0,0,1-3,.53A7.28,7.28,0,0,1,2.89,13.55Z" fill="#2e3a47"/><path d="M23.69,4.55,21.82,14H18.69l.19-.89a4.07,4.07,0,0,1-4.69.53,3.83,3.83,0,0,1-1.47-1.49,4.54,4.54,0,0,1-.55-2.29,5.68,5.68,0,0,1,.68-2.77,5.23,5.23,0,0,1,1.86-2,4.92,4.92,0,0,1,2.57-.71,3.17,3.17,0,0,1,2.88,1.28l.23-1.13Zm-4.78,6.19a2.78,2.78,0,0,0,.63-1.89,1.78,1.78,0,0,0-.48-1.32A1.74,1.74,0,0,0,17.75,7a2,2,0,0,0-1.62.73,2.82,2.82,0,0,0-.62,1.91,1.65,1.65,0,0,0,1.79,1.79A2,2,0,0,0,18.91,10.74Z" fill="#2e3a47"/><path d="M40.26,5.23a3.08,3.08,0,0,1,.9,2.37A5.79,5.79,0,0,1,41,8.76L40,14h-3.3l1-4.87a3,3,0,0,0,.07-.66,1.31,1.31,0,0,0-.3-.94,1.15,1.15,0,0,0-.88-.31c-1,0-1.72.67-2,2l-1,4.75H30.31l1-4.87a3.22,3.22,0,0,0,.07-.64,1.34,1.34,0,0,0-.31-1,1.12,1.12,0,0,0-.88-.32c-1.06,0-1.73.69-2,2.06L27.24,14h-3.3l1.87-9.43h3.13l-.19,1A3.93,3.93,0,0,1,31.57,4.4a3.59,3.59,0,0,1,1.68.39A2.69,2.69,0,0,1,34.4,5.93a4.39,4.39,0,0,1,1.54-1.14,4.64,4.64,0,0,1,1.92-.39A3.42,3.42,0,0,1,40.26,5.23Z" fill="#2e3a47"/><path d="M51.6,4.91A3.83,3.83,0,0,1,53.07,6.4a4.49,4.49,0,0,1,.56,2.27,5.6,5.6,0,0,1-.69,2.79,5.23,5.23,0,0,1-1.86,2,4.9,4.9,0,0,1-2.57.71,3.11,3.11,0,0,1-3-1.49L45.25,14H42.1l2.57-12.9H48l-.84,4.19a3.83,3.83,0,0,1,2.5-.87A4,4,0,0,1,51.6,4.91Zm-1.94,5.83a2.78,2.78,0,0,0,.63-1.89,1.78,1.78,0,0,0-.48-1.32A1.74,1.74,0,0,0,48.5,7a2,2,0,0,0-1.62.73,2.82,2.82,0,0,0-.63,1.91A1.74,1.74,0,0,0,46.73,11a1.78,1.78,0,0,0,1.31.48A2,2,0,0,0,49.66,10.74Z" fill="#2e3a47"/><path d="M56.06,4.55h3.28L57.47,14H54.18ZM56.79,3a1.49,1.49,0,0,1-.52-1.16A1.73,1.73,0,0,1,56.85.53,2.22,2.22,0,0,1,58.39,0a2.1,2.1,0,0,1,1.39.44,1.43,1.43,0,0,1,.52,1.14A1.81,1.81,0,0,1,59.71,3a2.22,2.22,0,0,1-1.55.54A2,2,0,0,1,56.79,3Z" fill="#2e3a47"/><path d="M71.44,4.55,69.57,14H66.44l.19-.89a4.07,4.07,0,0,1-4.69.53,3.83,3.83,0,0,1-1.47-1.49,4.54,4.54,0,0,1-.55-2.29,5.68,5.68,0,0,1,.68-2.77,5.23,5.23,0,0,1,1.86-2A4.92,4.92,0,0,1,65,4.4a3.17,3.17,0,0,1,2.88,1.28l.23-1.13Zm-4.78,6.19a2.78,2.78,0,0,0,.63-1.89,1.78,1.78,0,0,0-.48-1.32A1.74,1.74,0,0,0,65.5,7a2,2,0,0,0-1.62.73,2.82,2.82,0,0,0-.62,1.91,1.65,1.65,0,0,0,1.79,1.79A2,2,0,0,0,66.66,10.74Z" fill="#2e3a47"/></g></svg>
            </Link>
          </div>
          <nav className="Header-navContainer">
            <Link to="/" className="textColorWhite">
                <span>Inicio</span>
            </Link>
            <Link to="/nosotros" className="textColorWhite ">
                <span>Nosotros</span>
            </Link>
            <Link to="/soporte" className="textColorWhite">
                <span>Soporte</span>
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;