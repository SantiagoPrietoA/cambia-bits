import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Support from './containers/Support';
import Us from './containers/Us';


function App() {
    return ( <
        BrowserRouter >
        <
        Switch >
        <
        Route path = "/"
        exact = { true }
        component = { Home }
        />   <
        Route path = "/nosotros"
        exact = { true }
        component = { Us }
        />  <
        Route path = "/soporte"
        exact = { true }
        component = { Support }
        />   <
        Route form = "*"
        to = "/" / >
        <
        /Switch >  <
        /BrowserRouter>
    );
}

export default App;