import { AntDesign } from "@expo/vector-icons";
import Navbar from "../components/navbar";
import { Link } from 'expo-router';
import {StyleSheet, View,Text,ScrollView, Pressable} from "react-native";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function Geology() {
    return(
        <View style={{flexDirection:'column'}}>
            <Navbar/>
            <ScrollView>
            <View style={styles.outside}>
                <View style={styles.container}>
                <Text style={styles.title}>Geology</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.item}>When exploring a beach or tidepool, one delves into a world shaped by geological forces over millennia. Here, rocks reveal ancient layers and fossils, offering glimpses into the Earth's past. Sands, composed of weathered particles, bear witness to the enduring effects of waves and weather. Tidepools, miniature underwater habitats, host a rich diversity of marine life, showcasing the intricate interplay between land and sea. These coastal environments provide a captivating window into the Earth's history and the dynamic processes that shape our planet's landscapes.</Text>
                </View>
            </View>
            <View style={{ backgroundColor: sand, width: '100vw', height: '5vh' }}></View>
            </ScrollView>
        </View>
    )
}

styles = StyleSheet.create({
    outside:{
        backgroundColor: blue,
        height: '100vh',
        width: '100vw',
        paddingBottom:100
    },
    container:{
        margin:20,
        backgroundColor:'white',
        borderRadius:'20',
        flex:1,
        height:"80vh",
        width:"90vw"
    },
    title:{
        color: '#064777',
        margin:10,
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:35
    },
    line:{
        borderColor:'lightblue',
        borderWidth:.5,
        marginHorizontal:10
    },
    item:{
        margin:5,
        color: '#064777',
        fontSize: 20,
        marginHorizontal:10
    }
});