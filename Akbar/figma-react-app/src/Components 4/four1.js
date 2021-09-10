import React, { Component } from 'react';
import img32 from '../images/all box.png'
import img36 from '../images/all box2.png'
import img33 from '../images/box4.png'
import img34 from '../images/kodu3.png'
import img35 from '../images/box5.png'
import './four2.css';


export default class navbar1 extends Component {
    render() {
        return (
            <div className="four">
                <div className="border8">
                <img className="thirty3" src={img32} alt="all box"/>
                <img className="thirty4" src={img33} alt="box4"/>
                <img className="thirty5" src={img34} alt="kodu3"/>
                <div className="ach">Achievements</div>
                <div className="at">We, at Busyhubs, have created a strong network of learners and tutors over the past couple of years and the community has only been flourishing since then. They are well-informed about the recent trends and developments.<br/><br/> We have been able to place a few of our learners in the industry with opportunities that have made their dreams come true. Come join us on the journey to revolutionised learning</div>
                <div className="at1">Some of our Growing Numbers for past years that we need to show you <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh quam purus eu nibh phasellus purus vel. Et vestibulum, eu velit, amet. Sit eu molestie cursus vitae. Sollicitudin duis ut donec eget sapien, netus. Nam a, ornare mauris aliquet aliqu </div>
                <img className="thirty6" src={img35} alt="box5"/>
                <img className="thirty7" src={img36} alt="all box2"/> 
        </div> 
              
            </div>
        )
    }
}