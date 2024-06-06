import { AntDesign } from "@expo/vector-icons";
import Navbar from "../components/navbar";
import { Link } from 'expo-router';
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "react-native-svg";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function TideCharts() {
    return (
        <>
            <Navbar />
            <View style={styles.centeredView}>
                <View style={styles.container}>
                    <Text style={styles.title}>Tide Charts</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.item}>Tide Charts area great way to see how high or low the water level is going to be on any given day. When the tide chart is low, the water level will be lower meaning that more of the tidepools will be accessible to visit and explore, while a higher tide means that much of the tidepool may be submerged or inaccessible.</Text>
                </View>
            </View>
            {/* Rest of your code */}
        </>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        flex: 1,
        padding: 10,
    },
    title: {
        color: '#064777',
        margin: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 35,
        textAlign: 'center',
    },
    line: {
        borderColor: sand,
        borderWidth: 2,
        marginHorizontal: 10,
        alignSelf: 'stretch',
    },
    item: {
        margin: 5,
        color: '#064777',
        fontSize: 20,
        marginHorizontal: 10,
        textAlign: 'center',
    }
});