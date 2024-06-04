import React from "react";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import "./App.css"; // Importing the CSS file for styling
import Chart from "./components/chart";

const logo = require("../assets/lof.png"); // Importing the LOF logo
const search_location = require("../assets/search-location.png"); // Importing the search location icon
const book = require("../assets/book.png"); // Importing the book icon
const fish_cooked = require("../assets/fish-cooked.png"); // Importing the fish icon
const handshake = require("../assets/handshake.png"); // Importing the handshake icon

const HomePage = () => {
  return (
    <div>
      {/* Navigation bar */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <div className="container justify-content-between">
          <div>
            {/* Making the LOF logo a pressable image that leads to lagunaoceanfoundation.org */}
              <Pressable>
                <Image
                  style={{ height: 40, width: 150, margin: 5 }}
                  source={logo}
                />
              </Pressable>
          </div>
          <div>
            {/* Button to toggle navigation menu on small screens */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navigation menu */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                {/* Links to different pages */}
                <li className="nav-item">
                  <a className="nav-link" href="page1.html">
                    Page 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="page2.html">
                    Page 2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="page3.html">
                    Page 3
                  </a>
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
          <button className="button">
            <Link href="./components/Map/MapComponent">
              <Image
                style={{ width: 40, height: 40, marginBottom: 5 }}
                source={search_location}
              />
              <div>Interactive Map</div>
            </Link>
          </button>
          {/* Button for Field Guide */}
          <button
            onClick={() => window.open("https://thadiel.github.io/", "_blank")}
            className="button"
          >
            <Image
              style={{ width: 40, height: 40, marginBottom: 5 }}
              source={book}
            />
            <div>Field Guide</div>
          </button>
        </div>
        {/* Second row of buttons */}
        <div className="button-row">
          {/* Button for Wildlife Directory */}
          <button
            onClick={() => window.open("https://thadiel.github.io/", "_blank")}
            className="button"
          >
            <Image
              style={{ width: 40, height: 40, marginBottom: 5 }}
              source={fish_cooked}
            />
            <div>Wildlife Directory</div>
          </button>
          {/* Button for Support LOF */}
          <button
            onClick={() =>
              window.open(
                "https://givebutter.com/laguna-ocean-foundation",
                "_blank"
              )
            }
            className="button"
          >
            <Image
              style={{ width: 40, height: 40, marginBottom: 5 }}
              source={handshake}
            />
            <div>Support LOF</div>
          </button>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default HomePage;
