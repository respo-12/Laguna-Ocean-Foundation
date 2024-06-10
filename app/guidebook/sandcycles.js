import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Navbar from "../components/navbar";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';

export default function SandCycles() {
    return (
        <View style={styles.container}>
            <Navbar />
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}>Sand Cycles</Text>
                    <View style={styles.line} />
                    <Text style={styles.item}>
                        Sand cycles are like the way sand at the beach moves around in a big circle. It's how the sand gets carried by the wind or water, then settles down again. This movement of sand happens over and over, and it's why beaches and deserts sometimes look different from one day to the next. Sand cycles are important because they help make the land and beaches look the way they do, and they also help animals and plants live in their habitats.
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
