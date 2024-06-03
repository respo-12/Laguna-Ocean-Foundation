import React from 'react';
import './App.css'; // Importing the CSS file for styling
import Chart from './components/chart';

const HomePage = () => {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{paddingTop: '20px', paddingBottom: '20px'}}>
        <div className="container justify-content-between">
          <div>
            {/* Making the LOF logo a pressable image that leads to lagunaoceanfoundation.org */}
            <a href="https://www.lagunaoceanfoundation.org/" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/lof.png')} alt="LOF Logo" className="logo" />
            </a>
          </div>
          <div>
            {/* Button to toggle navigation menu on small screens */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navigation menu */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                {/* Links to different pages */}
                <li className="nav-item">
                  <a className="nav-link" href="page1.html">Page 1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="page2.html">Page 2</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="page3.html">Page 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Container for buttons */}
      <div className="buttons-container">
        {/* First row of buttons */}
        <div className="button-row">
          {/* Button for Interactive Map */}
          <button onClick={() => window.open('https://thadiel.github.io/LOFWebVersion/map', '_blank')} className="button">
          <img src={require('../assets/search-location.png')} alt="Interactive Map" className="button-image" />
            <div>Interactive Map</div>
          </button>
          {/* Button for Field Guide */}
          <button onClick={() => window.open('https://thadiel.github.io/', '_blank')} className="button">
          <img src={require('../assets/book.png')} alt="Interactive Map" className="button-image" />
            <div>Field Guide</div>
          </button>
        </div>
        {/* Second row of buttons */}
        <div className="button-row">
          {/* Button for Wildlife Directory */}
          <button onClick={() => window.open('https://thadiel.github.io/', '_blank')} className="button">
          <img src={require('../assets/fish-cooked.png')} alt="Interactive Map" className="button-image" />
            <div>Wildlife Directory</div>
          </button>
          {/* Button for Support LOF */}
          <button onClick={() => window.open('https://givebutter.com/laguna-ocean-foundation', '_blank')} className="button">
          <img src={require('../assets/handshake.png')} alt="Interactive Map" className="button-image" />
            <div>Support LOF</div>
          </button>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default HomePage;