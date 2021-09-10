import React, { Component } from 'react';
import img41 from '../images/sub1.png'
import img42 from '../images/sub2.png'
import img43 from '../images/sub3.png'
import img44 from '../images/sub4.png'
import img45 from '../images/sub5.png'
import img46 from '../images/sub6.png'
import img47 from '../images/sub7.png'
import img48 from '../images/sub8.png'
import img49 from '../images/busyhubs.png'
import img50 from '../images/all web 2.png'
import img51 from '../images/we.png'
import img52 from '../images/whatsapp.png'
import img53 from '../images/wpp2.png'
import './six2.css';

export default class navbar1 extends Component {
    render() {
        return (
   <div className="six">
          <div className="border10">
               <img class="fourty2" src={img41} alt="sub1"/>
               <img class="fourty3" src={img42} alt="sub2"/>
                 <div className="reg">Register as a tutor</div>
                 <div className="jo">Join Our Fastest Growing Tutor Community</div>
                 <div className="thou">Thousands of tutors enrolled with us to teach and link with thousands of students and the community is growing larger and stronger every day. Be a part of it now!</div>
                  <div className="book9">
                       <div className="reg1">Register Now</div> 
                   </div>
                <img class="fourty4" src={img43} alt="sub3"/>
                 <img class="fourty5" src={img44} alt="sub4"/>  
                <img class="fourty6" src={img45} alt="sub5"/>  
                <img class="fourty7" src={img46} alt="sub6"/>
                <img class="fourty8" src={img47} alt="sub6"/>
                <img class="fourty9" src={img48} alt="sub7"/> 
            
            <div className="border11">
                <div className="how">How it works</div>
                <div className="ou">Our networks works in a new way connecting learners with the best tutors around and also providing the best batch classes</div>
                  <div className="book10">
                     <div className="se">sew now</div>
                  </div>

                  <div className="border12">
                     <div className="cus">Customer Support</div> 
                     <div className="ou1">Our customer care agents are always round the corner to pick up your issues and attend to them immediately. </div>
                       <div className="book11">
                         <div className="su">support</div>
                       </div>
                  </div>
                  
              <img class="fourty10" src={img49} alt="busyhub"/>
              <div className="busy1">busyhubs</div>
              <div className="nev">Never stop learning, we believe everyone deserves quality learning experience. BusyHubs provide you an integrated learning solution to connect the enthusiastic learner with the industry specialists across horizons</div>
              
               <div className="ca">Categories</div>
              <div className="ca1">IT Courses<br/><br/>Music<br/><br/>Yoga<br/><br/>Language<br/><br/>Exam Preparation<br/><br/>Tuition</div>

              <div className="ca2">Company</div>
              <div className="ca3">How it Works<br/><br/>About Us<br/><br/>Blog<br/><br/>Testimonials<br/><br/>Contact Us</div>

              <div className="ca4">Support</div>
              <div className="ca5">Help Center<br/><br/>FAQ’s<br/><br/>Site Map<br/><br/>Privacy Policy<br/><br/>Terms of Services</div>

               <div className="ca6">Social Media</div>  
               <img className="fourty11" src={img50} alt="all web 2"/>
               <div className="ca7">Talk to us</div>    
               <img className="fourty12" src={img51} alt="we"/>
           <hr/>
           <div className="re">© 2020 busyhubs. All Rights Reserved. </div>  
           <div className="re1">powered by <bold>prodijar</bold> </div>  
            </div>           
         </div>
         <img className="wa" src={img52} alt="whatsapp"/>   
         <img className="wa1" src={img53} alt="whatsapp2"/>   
    </div>
        )
    }
}
