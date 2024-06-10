import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Navbar from "../components/navbar";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';

export default function InterTidal() {
    return (
        <View style={styles.container}>
            <Navbar />
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}>Inter Tidal Zone</Text>
                    <View style={styles.line} />
                    <Text style={styles.item}>
                        The intertidal zone is like a special area where the land and the sea meet. It's the part of the beach that gets covered with water when the tide comes in and then becomes dry when the tide goes out. This zone is home to lots of creatures like crabs, snails, and small fish, who live in pools of water or hide in rocks. It's like a busy neighborhood for sea animals! The intertidal zone is important because it's where the ocean and land connect, and it's where many creatures find food and shelter.
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
