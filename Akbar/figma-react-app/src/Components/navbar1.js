import React, { Component } from 'react';
import img1 from '../images/busyhubs.png';
import img52 from '../images/phone.png'
import img2 from '../images/company.png';
import img3 from '../images/glass.png';
import img5 from '../images/women.png';
import './navbar2.css';

export default class navbar1 extends Component {
render() {
    return (
      <div>
        <div class="first">
        <img class="one" src={img1}  alt="busyhubs"/>
        <div className="busy">busyhubs</div>

        <div className="ho">How it works</div>
        <div className="us">About us</div>
        <div className="bl">Blog</div>
        <div className="os">Sucess Stories</div>

        <div className="noo"><bold>&#8285;</bold></div>

        <img className="fourty13" src={img52} alt="po"/>
        <div className="ne">+91 9789781211 </div>
        <div className="boo"> 
            <div className="boo1">Tutor Register</div>
        </div>
        <div className="boo2"> 
            <div className="boo3">Login</div>
        </div>

        <div className="cll">
            <div className="cll1">Login</div>
          </div>  
        <div className="pu">&#8803;</div>        
        <div className="way">Smartest way to learn or<br/>skill up course</div>
        <img class="two" src={img2}  alt="busyhubs"/>
        
         <div className="find">Find thousands of tutors with hundreds of courses were you can skill up and achieve your long time dream</div>     
         
     
         <div className="box1">
            <img class="three" src={img3} alt="glass"/>
            <div className="sc">Search Courses</div>
         </div>
         <div className="box2">
             <div className="box3">Find a course</div> 
         </div>
       
       <div className="see">See courses below &#8595;</div>

     
      <div className="women">
     <div className="women1"></div>
     
      <div className="women2">
     <img class="five" src={img5} alt="women1"/>
      <div className="twohun1">200+ Verified Tutors  </div>
     <div className="or">Our Tutors are verified and qualified</div> 
     </div>
     
     <div className="women3">
      <img class="six" src={img5} alt="women1"/>
     <div className="twohun2">1000+ Learning students  </div>
     <div className="or1">Our Tutors are verified and qualified</div>     
    </div>

      <div className="women6">
        <img class="six1" src={img5} alt="women1"/>
         <div className="twohun3">1000+ Learning students  </div>
     <div className="or2">Our Tutors are verified and qualified</div>    
    </div>
    </div>   
  </div>         
 
  </div>  

         )
  }
}



