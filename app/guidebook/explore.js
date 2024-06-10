import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Navbar from "../components/navbar";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';

export default function Explore() {
    return (
        <View style={styles.container}>
            <Navbar />
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}>How to Explore!</Text>
                    <View style={styles.line} />
                    <Text style={styles.item}>
                        Embark on a coastal escapade in the Laguna Ocean area, where you can explore tidepools such as Treasure Island, Shaw's Cove, or Heisler Park. Start by checking tide schedules for optimal viewing times and accessibility options, ensuring everyone can join in the fun. With your curiosity as your guide, wander through these rocky havens, uncovering hidden marine treasures and encountering fascinating sea creatures along the way.
                    </Text>
                </View>
                <View style={styles.footer} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        backgroundColor: blue,
        padding: 20,
    },
    title: {
        color: '#064777',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
        marginBottom: 10,
    },
    line: {
        borderColor: sand,
        borderWidth: 2,
        marginVertical: 10,
    },
    item: {
        color: '#064777',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    footer: {
        backgroundColor: sand,
        height: 20,
    },
});
