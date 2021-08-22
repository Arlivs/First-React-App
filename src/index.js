import React from 'react'
import ReactDOM from 'react-dom';
import App from "./App"
import FirstComp from './FirstComp';
import SecondComp from './SecondComp';

ReactDOM.render(
  <>
    <App></App>
    <FirstComp></FirstComp>
    <SecondComp></SecondComp>
  </>,
  document.querySelector(".wrapper")
);
