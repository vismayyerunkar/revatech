import React from 'react'
import './FlipCards.css'

function FlipCards() {
    return (
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            </div>
            <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
            </div>
        </div>
        </div>
    )
}

export default FlipCards
