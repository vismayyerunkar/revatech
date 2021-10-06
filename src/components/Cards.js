
import React from 'react';
import './Cards.css';
import { Button } from './Button';
import AboutImage from './Images/aboutImage.jpeg'



function Cards() {
  

  return (
    <div id="aboutPage" className='cards'>

      <div  className="card-content">
     
      <h1 id="about-title">About Us</h1>
      <h2>Mutate Your Tech Vision Into Reality</h2>
      <h3>We help you transform your tech vision<br/>
        into reality.       
        </h3>
      <div className='card-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        > */}
        Know More 
        {/* </Button> */}
        
      </div>
      </div>
      <div className="card-image">
        <img src={AboutImage} alt="about"/>
      </div>
    </div>
  );
}

export default Cards;
