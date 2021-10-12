import React from 'react';
import './styles/Clients.css'
import FlipCards from '../FlipCards.js'
import Navbar from '../Navbar';

export default function clients() {
  return (
  <>
  <Navbar/>
  <div className='clients'>
    <video src='/videos/video-3.mp4' autoPlay loop muted />
    <h3 id="client-testimonials">Client Testimonials</h3>
      <div className="cards-section">
        {/* <FlipCards/> */}
      </div>
    </div>
  );
  </>
  )
}
