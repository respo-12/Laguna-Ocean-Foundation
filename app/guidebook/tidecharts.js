import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Navbar from "../components/navbar";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';

export default function TideCharts() {
    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.content}>
                <Text style={styles.title}>Tide Charts</Text>
                <View style={styles.line} />
                <Text style={styles.item}>
                    Tide Charts are a great way to see how high or low the water level is going to be on any given day. When the tide chart is low, the water level will be lower, meaning that more of the tidepools will be accessible to visit and explore, while a higher tide means that much of the tidepool may be submerged or inaccessible.
                </Text>
            </View>
            <View style={styles.footer} />
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
