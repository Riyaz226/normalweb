import React, { Component } from 'react';
import img28 from '../images/kama.png'
import img29 from '../images/comment1.png'
import img30 from '../images/comment2.png'
import img31 from '../images/comment3.png'
import './third2.css';

export default class navbar1 extends Component {
    render() {
        return (
    <div className="third">
        <div className="border7">
             <div className="tes">Testimonials</div>   
             <div className="look">Look at what our learners have to say about us: </div>
             <img className="twenty9" src={img28} alt="kama"/> 
             <img className="thirty" src={img29} alt="comment1"/> 
             <img className="thirty1" src={img30} alt="comment2"/> 
             <img className="thirty2" src={img31} alt="comment2"/> 
        </div>  
    </div>     
            )
          }
        }