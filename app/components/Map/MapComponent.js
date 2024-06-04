import React, { useEffect, useRef, useState } from 'react';
import './MapComponent.css'; // Import the CSS file
import logo from './logo.png'; // Import the logo

const MapComponent = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [currentMarker, setCurrentMarker] = useState(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDImHXKmeA9dO6ZJt41HdA9Ni5Zrbkt7DA&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () => console.error('Google Maps API script could not be loaded.');
      document.head.appendChild(script);
    };

    window.initMap = () => {
      const lagunaBeach = { lat: 33.5427, lng: -117.7854 };
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        zoom: 12,
        center: lagunaBeach,
      });
      setMap(mapInstance);
    };

    loadGoogleMapsScript();

    return () => {
      window.initMap = null; // Clean up the global callback to prevent memory leaks
    };
  }, []);

  const showPopupMessage = () => {
    document.getElementById('popup-message').style.display = 'block';
  };

  const hidePopupMessage = () => {
    document.getElementById('popup-message').style.display = 'none';
  };

  const showForm = () => {
    document.getElementById('form-popup').style.display = 'block';
  };

  const hideForm = () => {
    document.getElementById('form-popup').style.display = 'none';
  };

  const addMarker = (location) => {
    const marker = new window.google.maps.Marker({
      position: location,
      map: map,
    });

    setMarkers((prevMarkers) => [...prevMarkers, marker]);
    setCurrentMarker(marker);

    marker.addListener('click', () => {
      setCurrentMarker(marker);
      showForm();
    });

    hidePopupMessage();
    showForm();
  };

  useEffect(() => {
    if (map) {
      window.google.maps.event.addListenerOnce(map, 'click', (event) => {
        addMarker(event.latLng);
      });
    }
  }, [map]);

  const handleAddObservation = () => {
    if (map) {
      window.google.maps.event.addListenerOnce(map, 'click', (event) => {
        addMarker(event.latLng);
      });

      showPopupMessage();
    }
  };

  const handleCloseForm = () => {
    hideForm();
    if (currentMarker) {
      currentMarker.setMap(null);
      setCurrentMarker(null);
    }
  };

  const handleSaveObservation = () => {
    hideForm();
    // Optionally, save the observation data to a database or display it somewhere
  };

  const handleDeleteMarker = () => {
    if (currentMarker) {
      currentMarker.setMap(null);
      setMarkers((prevMarkers) => prevMarkers.filter(marker => marker !== currentMarker));
      setCurrentMarker(null);
    }
    hideForm();
  };

  return (
    <div>
      <div className="top-bar">
        <div id="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div id="title">
          <h1>Interactive Map</h1>
        </div>
        <div id="menu-icon" className="menu-icon">&#9776;</div>
      </div>
      <div id="dropdown-menu" className="dropdown-menu">
        <a href="#option1">Home</a>
        <a href="#option2">Wildlife Directory</a>
        <a href="#option3">Support LOF</a>
        <a href="#option4">Field Guide</a>
      </div>
      <div id="map" ref={mapRef}></div>
      <div className="bottom-bar">
        <button id="add-observation" className="bottom-button" onClick={handleAddObservation}>Add Observation</button>
      </div>
      <div id="popup-message" className="popup-message">
        <p>Click on the map to add a new observation pin.</p>
      </div>
      <div id="form-popup" className="form-popup">
        <form id="observation-form">
          <h2>Observation Details</h2>
          <label htmlFor="organisms">What organisms did you observe?</label><br />
          <input type="radio" id="birds" name="organisms" value="Birds" />
          <label htmlFor="birds">Birds</label><br />
          <input type="radio" id="marine-mammals" name="organisms" value="Marine Mammals" />
          <label htmlFor="marine-mammals">Marine Mammals</label><br />
          <input type="radio" id="invertebrates" name="organisms" value="Invertebrates" />
          <label htmlFor="invertebrates">Invertebrates</label><br />
          <input type="radio" id="invasive-species" name="organisms" value="Invasive Species" />
          <label htmlFor="invasive-species">Invasive Species</label><br />
          <label htmlFor="activity">What were you doing?</label><br />
          <select id="activity" name="activity">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select><br />
          <button type="button" id="save-btn" className="save-btn" onClick={handleSaveObservation}>Save</button>
          <button type="button" id="delete-btn" className="delete-btn" onClick={handleDeleteMarker}>Delete</button>
          <span id="close-form" className="close-form" onClick={handleCloseForm}>X</span>
        </form>
      </div>
    </div>
  );
};

export default MapComponent;
