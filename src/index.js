import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Routing';
import {BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter><Home/></BrowserRouter>,document.querySelector('#root'));