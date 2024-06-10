import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Navbar from "../components/navbar";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';

export default function Geology() {
    return (
        <View style={styles.container}>
            <Navbar />
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}>Geology</Text>
                    <View style={styles.line} />
                    <Text style={styles.item}>
                        When exploring a beach or tidepool, one delves into a world shaped by geological forces over millennia. Here, rocks reveal ancient layers and fossils, offering glimpses into the Earth's past. Sands, composed of weathered particles, bear witness to the enduring effects of waves and weather. Tidepools, miniature underwater habitats, host a rich diversity of marine life, showcasing the intricate interplay between land and sea. These coastal environments provide a captivating window into the Earth's history and the dynamic processes that shape our planet's landscapes.
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
