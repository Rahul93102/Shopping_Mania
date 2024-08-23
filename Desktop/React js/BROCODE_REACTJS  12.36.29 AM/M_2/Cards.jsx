import React from 'react';
import Cars from '../assets/img.jpg'; // Adjusted import path method import images

function Cards() {
    return (
        <div className="card">
            <img  className = "imgs" src={Cars} alt="Cool Car" />
            <h1>Cool Cars</h1>
            <p>Cool and Classy Cars which look good</p>
        </div>
    );
}
export default Cards;
