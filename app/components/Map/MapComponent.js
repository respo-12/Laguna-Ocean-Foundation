import React, { useEffect, useRef, useState } from "react";
import "./MapComponent.css"; // Import the CSS file
import { Pressable, Image } from "react-native";
import logo from "../../../assets/lof.png"; // Ensure the correct path to the logo image

const MapComponent = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [currentMarker, setCurrentMarker] = useState(null);
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDImHXKmeA9dO6ZJt41HdA9Ni5Zrbkt7DA&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () =>
        console.error("Google Maps API script could not be loaded.");
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
    document.getElementById("popup-message").style.display = "block";
  };

  const hidePopupMessage = () => {
    document.getElementById("popup-message").style.display = "none";
  };

  const showForm = () => {
    document.getElementById("form-popup").style.display = "block";
  };

  const hideForm = () => {
    document.getElementById("form-popup").style.display = "none";
  };

  const addMarker = (location) => {
    const marker = new window.google.maps.Marker({
      position: location,
      map: map,
    });

    setMarkers((prevMarkers) => [...prevMarkers, marker]);
    setCurrentMarker(marker);

    marker.addListener("click", () => {
      setCurrentMarker(marker);
      showForm();
    });

    hidePopupMessage();
    showForm();
  };

  useEffect(() => {
    if (map) {
      window.google.maps.event.addListenerOnce(map, "click", (event) => {
        addMarker(event.latLng);
      });
    }
  }, [map]);

  const handleAddObservation = () => {
    if (map) {
      window.google.maps.event.addListenerOnce(map, "click", (event) => {
        addMarker(event.latLng);
      });

      showPopupMessage();
    }
  };

  const handleCloseForm = () => {
    hideForm();
    if (currentMarker && !observations.some(obs => obs.marker === currentMarker)) {
      currentMarker.setMap(null);
      setCurrentMarker(null);
    }
  };

  const handleSaveObservation = () => {
    const formData = new FormData(document.getElementById("observation-form"));
    const organism = formData.get("organisms");
    const activity = formData.get("activity");

    if (!organism || !activity) {
      alert("Please select an organism and an activity.");
      return;
    }

    const newObservation = {
      organisms: organism,
      activity: activity,
      image: formData.get("image"),
      marker: currentMarker,
    };

    setObservations((prevObservations) => [...prevObservations, newObservation]);
    hideForm();
  };

  const handleDeleteMarker = () => {
    if (currentMarker) {
      currentMarker.setMap(null);
      setMarkers((prevMarkers) =>
        prevMarkers.filter((marker) => marker !== currentMarker)
      );
      setCurrentMarker(null);
    }
    hideForm();
  };

  return (
    <div>
      <div className="top-bar">
        <Pressable>
          <Image style={{ height: 40, width: 150, margin: 5 }} source={logo} />
        </Pressable>
        <div id="title">
          <h1>Interactive Map</h1>
        </div>
      </div>
      <div id="map" ref={mapRef}></div>
      <div className="bottom-bar">
        <button
          id="add-observation"
          className="bottom-button"
          onClick={handleAddObservation}
        >
          Add Observation
        </button>
      </div>
      <div id="popup-message" className="popup-message">
        <p>Click on the map to add a new observation pin.</p>
      </div>
      <div id="form-popup" className="form-popup">
        <form id="observation-form">
          <h2>Observation Details</h2>
          <label htmlFor="organisms">What organisms did you observe?</label>
          <div>
            <input type="radio" id="birds" name="organisms" value="Birds" />
            <label htmlFor="birds">Birds</label>
          </div>
          <div>
            <input
              type="radio"
              id="marine-mammals"
              name="organisms"
              value="Marine Mammals"
            />
            <label htmlFor="marine-mammals">Marine Mammals</label>
          </div>
          <div>
            <input
              type="radio"
              id="invertebrates"
              name="organisms"
              value="Invertebrates"
            />
            <label htmlFor="invertebrates">Invertebrates</label>
          </div>
          <div>
            <input
              type="radio"
              id="invasive-species"
              name="organisms"
              value="Invasive Species"
            />
            <label htmlFor="invasive-species">Invasive Species</label>
          </div>
          <label htmlFor="activity">What were you doing?</label>
          <select id="activity" name="activity">
            <option value="">Select an activity</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select>
          <label htmlFor="image">Upload an image (optional):</label>
          <input type="file" id="image" name="image" accept="image/*" />
          <div className="form-buttons">
            <button
              type="button"
              id="save-btn"
              className="save-btn"
              onClick={handleSaveObservation}
            >
              Save
            </button>
            {observations.some(obs => obs.marker === currentMarker) && (
              <button
                type="button"
                id="delete-btn"
                className="delete-btn"
                onClick={handleDeleteMarker}
              >
                Delete
              </button>
            )}
            <span
              id="close-form"
              className="close-form"
              onClick={handleCloseForm}
            >
              X
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MapComponent;
