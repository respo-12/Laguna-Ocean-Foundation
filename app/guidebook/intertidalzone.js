import { AntDesign } from "@expo/vector-icons";
import Navbar from "../components/navbar";
import { Link } from 'expo-router';
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function InterTidal() {
    return (
        <View style={{ flexDirection: 'column' }}>
            <Navbar />
            <ScrollView>
                <View style={styles.outside}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Inter Tidal Zone</Text>
                        <View style={styles.line}></View>
                        <Text style={styles.item}>The intertidal zone is like a special area where the land and the sea meet. It's the part of the beach that gets covered with water when the tide comes in and then becomes dry when the tide goes out. This zone is home to lots of creatures like crabs, snails, and small fish, who live in pools of water or hide in rocks. It's like a busy neighborhood for sea animals! The intertidal zone is important because it's where the ocean and land connect, and it's where many creatures find food and shelter.</Text>
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
        borderRadius: '20',
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