// Initialize and add the map
function initMap() {
    // The location of Laguna Beach
    const lagunaBeach = { lat: 33.5427, lng: -117.7854 };

    // The map, centered at Laguna Beach
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: lagunaBeach,
    });

    let markers = [];
    let currentMarker = null;

    // Function to add a new marker
    function addMarker(location) {
        const marker = new google.maps.Marker({
            position: location,
            map: map,
        });

        markers.push(marker);
        currentMarker = marker;

        marker.addListener('click', () => {
            currentMarker = marker;
            showForm();
        });

        hidePopupMessage();
        showForm(); // Show the form immediately after adding the marker
    }

    // Add a marker when the add observation button is clicked
    document.getElementById('add-observation').addEventListener('click', () => {
        google.maps.event.addListenerOnce(map, 'click', (event) => {
            addMarker(event.latLng);
        });

        showPopupMessage();
    });
}

// Load the Google Maps API script
function loadScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDImHXKmeA9dO6ZJt41HdA9Ni5Zrbkt7DA&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => console.error('Google Maps API script could not be loaded.');
    document.head.appendChild(script);
}

// Load the script when the page loads
window.onload = loadScript;

function showPopupMessage() {
    document.getElementById('popup-message').style.display = 'block';
}

function hidePopupMessage() {
    document.getElementById('popup-message').style.display = 'none';
}

function showForm() {
    document.getElementById('form-popup').style.display = 'block';
}

function hideForm() {
    document.getElementById('form-popup').style.display = 'none';
}

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const addObservationButton = document.getElementById('add-observation');
    const popupMessage = document.getElementById('popup-message');
    const closeFormButton = document.getElementById('close-form');
    const saveButton = document.getElementById('save-btn');
    const deleteButton = document.getElementById('delete-btn');
    const formPopup = document.getElementById('form-popup');
    const observationForm = document.getElementById('observation-form');
    let currentMarker = null;

    menuIcon.addEventListener('click', function () {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });

    // Hide dropdown when clicking outside
    window.addEventListener('click', function (e) {
        if (!menuIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Show popup message when add observation button is clicked
    addObservationButton.addEventListener('click', function () {
        google.maps.event.addListenerOnce(map, 'click', (event) => {
            addMarker(event.latLng);
        });

        showPopupMessage();
    });

    // Close the form without saving
    closeFormButton.addEventListener('click', function () {
        hideForm();
        if (currentMarker) {
            currentMarker.setMap(null);
            currentMarker = null;
        }
    });

    // Save the observation
    saveButton.addEventListener('click', function () {
        hideForm();
        // Optionally, you can save the observation data to a database or display it somewhere
    });

    // Delete the marker
    deleteButton.addEventListener('click', function () {
        if (currentMarker) {
            currentMarker.setMap(null);
            currentMarker = null;
        }
        hideForm();
    });

    // Function to add a new marker
    function addMarker(location) {
        const marker = new google.maps.Marker({
            position: location,
            map: map,
        });

        markers.push(marker);
        currentMarker = marker;

        marker.addListener('click', () => {
            currentMarker = marker;
            showForm();
        });

        hidePopupMessage();
        showForm(); // Show the form immediately after adding the marker
    }
});
