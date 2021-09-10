import React, { Component } from 'react';
import img6 from '../images/women.png';
import img7 from '../images/code.png';
import img8 from '../images/box.png';
import img9 from '../images/company2.png'
import img10 from '../images/box1.png'
import img11 from '../images/kodu.png'
import img12 from '../images/round.png'
import img13 from '../images/traning 1.png';
import img14 from '../images/traning 2.png';
import img15 from '../images/traning 3.png'
import img16 from '../images/traning 4.png'
import img17 from '../images/traning 5.png'
import img18 from '../images/traning 6.png'
import img19 from '../images/all web.png'
import img21 from '../images/post1.png'
import img22 from '../images/post2.png'
import img23 from '../images/post3.png'
import img24 from '../images/post4.png'
import img25 from '../images/kodu2.png'
import img26 from '../images/round2.png'
import img27 from '../images/round3.png'
import './second2.css';

export default class navbar1 extends Component {
    render() {
        return (
    <div className="second">
           <div className="on">Ongoing Batch Courses</div>
          <div className="we">We conduct the most indemand IT courses in batches</div>
         
       
          <div className="border1">
           <div className="demand">In demand</div>
           <div className="full">Full Stack MERN/MEAN Development</div>
           <div className="this">This course offered by buyshubs in assosication with the leading tutors</div>
             <div className="book">       
              <div className="book1">Book Free Demo</div>
           </div> 
     
            <img class="seven" src={img7}  alt="code"/> 
           </div>
         
            <div className="border2">
           <div className="basic">Basic Web Development</div>
           <div className="the">The basic web development classes organised in batches.</div>
             <div className="book2">
              <div className="book3">Book Free Demo</div>
              <img class="eight" src={img8}  alt="box"/>  
           </div>
          </div>
          
             <div className="border3">
           <div className="basic">Fullstack QA</div>
           <div className="full1">The Full Stack QA classes organised in batches.</div>
           <div className="book4">
              <div className="book5">Book Free Demo</div>
              <img class="eight1" src={img8}  alt="box"/> 
           </div>
         </div> 
          
         <div className="border4">
          <img  class="nine" src={img9} alt="company2"/>
         <div id="ten"> <img  class="ten" src={img10} alt="box1"/></div>
         <div className="get">Get a Free Course Guideline consultation</div>
         <div className="get1">Get a free course guildeline from our experts to know about the courses and its standards</div>
         <div className="book6">
          <div className="book7">Get Started</div>
         </div>
         <div id="eleven"><img  class="eleven" src={img11} alt="kodu"/></div>
         <img class="tweleve" src={img12} alt="round"/>
         </div> 
         
         <div className="third">
              <div className="cat">Categories</div>
              <div className="select">Select Courses From the list of categories</div>
           <div className="images">
               <img class="thirteen" src={img13} alt="traning 1"/>
               <img class="fourteen" src={img14} alt="traning 2"/>
               <img class="fiveteen" src={img15} alt="traning 3"/>
               <img class="sixteen" src={img16} alt="traning 4"/>
               <img class="seventeen" src={img17} alt="traning 5"/>
               <img class="eighteen" src={img18} alt="traning 6"/> 
           </div>
         
           <div className="border5">
            <div className="it">IT Courses</div>
           <div className="our">Our IT Courses are 1 to 1 courses connected directley to the tutor for better understability and beautiful learning experience.Our IT Courses are 1 to 1 courses connected directley to the tutor for better understability and beautiful learning experience.</div>
            
            
            <div className="women4">
            <img class="twenty" src={img6} alt="women3"/>
             <div className="demand1">Demand for IT People</div>
             <div className="our1">Our Tutors are verified and qualified</div> 
             </div>
     
             <div className="women5">
            <img class="twenty" src={img6} alt="women3"/>
             <div className="demand1">Demand for IT People</div>
             <div className="our1">Our Tutors are verified and qualified</div> 
             </div> 
         <img className="nineteen" src={img19}/> 
            <div className="explore"> 
           <div className="explore1">Explore Course</div>
           <div className="explore2"> &#8594;</div>
           </div>
          </div> 
    </div>  
             
              <div className="pop">Popular courses</div>
             <div className="course">Courses that are popular among the learners</div>
             
             <div className="images2">
             <img class="twenty1" src={img21} alt="post1"/>
             <img class="twenty2" src={img22} alt="post2"/>
             <img class="twenty3" src={img23} alt="post3"/>
             <img class="twenty4" src={img24} alt="post4"/>
              </div>

        <div className="border6">
           <div className="don">Don’t have an idea regarding which course to pick?</div>
           <div className="mat">Match your goals to our programes, explore options and map out the path to success</div>
           <img className="twenty5" src={img25} alt="kodu2"/>
           <img className="twenty6" src={img26} alt="round2"/>
         <div className="book8">
            <div>Get Started</div>
         </div> 
         <img className="twenty7" src={img25} alt="kodu2"/>
         <img className="twenty8" src={img27} alt="round3"/>
         </div>   
</div>
           
            )
          }
        }