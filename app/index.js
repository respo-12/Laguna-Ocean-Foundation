
import { Link } from "expo-router";
import { StyleSheet, Pressable, Text, View, Dimensions } from "react-native";
import Navbar from "./components/navbar";
import Chart from "./components/chart";
import HomePage from "./HomePage";

import LogBG from '../assets/NewLog.svg'
import MapBG from '../assets/NewMap.svg'
import FieldBG from '../assets/NewField.svg'

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#1A526B';
//
export default function App() {
    return (
        <>
         <Navbar />
        <HomePage />
        </>
       
    );
}