import React from 'react';
import './App.css'; // Importing the CSS file for styling

const HomePage = () => {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{paddingTop: '20px', paddingBottom: '20px'}}>
        <div className="container justify-content-between">
          <div>
            {/* Button to toggle navigation menu on small screens */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
      {/* Container for buttons */}
      <div className="buttons-container">
        {/* First row of buttons */}
        <div className="button-row">
          {/* Button for Interactive Map */}
          <button onClick={() => window.open('https://thadiel.github.io/LOFWebVersion/map', '_blank')} className="button">
            <div>Interactive</div>
            <div>Map</div>
          </button>
          {/* Button for Field Guide */}
          <button onClick={() => window.open('https://thadiel.github.io/', '_blank')} className="button">
            <div>Field</div>
            <div>Guide</div>
          </button>
        </div>
        {/* Second row of buttons */}
        <div className="button-row">
          {/* Button for Wildlife Directory */}
          <button onClick={() => window.open('https://thadiel.github.io/', '_blank')} className="button">
            <div>Wildlife</div>
            <div>Directory</div>
          </button>
          {/* Button for Support LOF */}
          <button onClick={() => window.open('https://givebutter.com/laguna-ocean-foundation', '_blank')} className="button">
            <div>Support</div>
            <div>LOF</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
