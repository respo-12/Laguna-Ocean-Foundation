import { AntDesign } from "@expo/vector-icons";
import Navbar from "../components/navbar";
import { Link } from 'expo-router';
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function TideCharts() {
    return (
        <View style={{ flexDirection: 'column' }}>
            <Navbar />
            <ScrollView>
                <View style={styles.outside}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Tide Charts</Text>
                        <View style={styles.line}></View>
                        <Text style={styles.item}>Tide Charts area great way to see how high or low the water level is going to be on any given day. When the tide chart is low, the water level will be lower meaning that more of the tidepools will be accessible to visit and explore, while a higher tide means that much of the tidepool may be submerged or inaccessible.</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: sand, width: '100vw', height: '5vh' }}></View>
            </ScrollView>
        </View>
    )
}

styles = StyleSheet.create({
    outside: {
        backgroundColor: blue,
        height: '100vh',
        width: '100vw',
        paddingBottom: 100
    },
    container: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius:20,
        flex: 1,
        height: "80vh",
        width: "90vw"
    },
    title: {
        color: '#064777',
        margin: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 35
    },
    line: {
        borderColor: 'lightblue',
        borderWidth: .5,
        marginHorizontal: 10
    },
    item: {
        margin: 5,
        color: '#064777',
        fontSize: 20,
        marginHorizontal: 10
    }
});