import React, { Component } from 'react';
import img37 from '../images/computer.png'
import img38 from '../images/mad1.png'
import img39 from '../images/mad2.png'
import img40 from '../images/mad3.png'
import './five2.css';

export default class navbar1 extends Component {
    render() {
        return (
            <div className="five">
              <div className="border9">
                <div className="why">Why Busyhubs</div>
                <div className="every"> Everything you need to know about us</div>
                <img class="thirty8" src={img37} alt="computer" />
         <img class="thirty9" src={img38} alt="mad1" />
                <div className="hand"> Handpicked & Certified Tutors</div>
                <div className="hand1"> We have tutors who are experts in their fields and who are carefully hand-picked through scrutinising screening processes. We give to you the best tutors from an enormous number of interested ones. </div>
               
       <img class="fourty" src={img39} alt="mad2" />
                 <div className="hand2"> Your convenience is our success</div>
                <div className="hand3"> You can pick the type and the time of the session, and learn at the comfort of your home.. </div>
        <img class="fourty1" src={img40} alt="mad3" />
               <div className="hand4">Flexible and ease of use:</div>
               <div className="hand5"> You can develop your skills using our interactive learning platform equipped with the latest technologies. We are always there to ensure that you get the best learning experience at ease. </div>
               
         </div>   
            </div>
        )
    }
}
