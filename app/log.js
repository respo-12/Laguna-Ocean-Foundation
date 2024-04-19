import Navbar from "./components/navbar";
import { Link } from 'expo-router';
import { StyleSheet, View, Text, ScrollView,Image } from "react-native";

import comingSoon from '../assets/comingsoon.png'

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function Logbook() {
    return (
        <View style={{ flexDirection: 'column', height:'100vh',width:'100vw'}}>
            <Navbar />
            <View style = {styles.outside}>
                <Image style={styles.image} source={comingSoon}/>
            </View>
            <View style={{ backgroundColor: sand, width: '100vw', height: '5vh' }}></View>
        </View>
    );
}

styles = StyleSheet.create({
    outside: {
        backgroundColor: blue,
        flex:1
    },
    image:{
        height:'35vh',
        width:'70vw',
        top:'15vh',
        alignSelf:'center',
        overflow:'visible'
    }
})