import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar1 from './Components/navbar1.js';
import Second1 from './Components 2/second1.js';
import Third1 from './Components 3/third1.js';
import Four1 from './Components 4/four1.js';
import Five1 from './Components 5/five1.js';
import Six1 from './Components 6/six1.js';
import './index.css';
import App from './App';



ReactDOM.render(
  <>
    <Navbar1/>
    <Second1/>
    <Third1/>
    <Four1/>
    <Five1/>
    <Six1/>
  <App/>
     </>
  ,document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

