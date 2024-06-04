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
import Navbar from "./components/navbar";

const logo = require("../assets/lof.png"); // Importing the LOF logo
const search_location = require("../assets/search-location.png"); // Importing the search location icon
const book = require("../assets/book.png"); // Importing the book icon
const fish_cooked = require("../assets/fish-cooked.png"); // Importing the fish icon
const handshake = require("../assets/handshake.png"); // Importing the handshake icon

const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* Container for buttons */}
      <div className="buttons-container">
        {/* First row of buttons */}
        <div className="button-row">
          {/* Button for Interactive Map */}
          <button className="button">
            <Link href="./components/Map/MapComponent" className="text-white text-center">
              <Image
                style={{ width: 40, height: 40, marginBottom: 5}}
                source={search_location}
                class="alight-self-center"
              />
              Interactive Map
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
