import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Navbar from "../components/navbar";
import { Link } from 'expo-router';

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';

export default function PlanTrip() {
    return (
        <View style={styles.container}>
            <Navbar />
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}>Plan your trip</Text>
                    <View style={styles.line} />
                    <Text style={styles.item}>
                        Embark on your tidepool adventure by first checking out the best times to visit based on tide schedules and researching the location for accessibility options like wheelchair ramps or smooth paths. Don't forget to grab your trusty tidepool exploration gear, including sturdy footwear for navigating rocky terrain! And remember, while you're marveling at the wonders of the tide, be sure to tread lightly and respect the quirky critters that call the tidepools home.
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
        alignSelf: 'center',
        fontSize: 35,
        marginBottom: 10,
    },
    line: {
        borderColor: 'lightblue',
        borderWidth: 0.5,
        marginVertical: 10,
    },
    item: {
        color: '#064777',
        fontSize: 20,
        marginBottom: 20,
    },
    footer: {
        backgroundColor: sand,
        height: 20,
    },
    // Additional styles can be added here if needed
});
