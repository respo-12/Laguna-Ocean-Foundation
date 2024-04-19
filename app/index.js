
import { Link } from "expo-router";
import { StyleSheet, Pressable, Text, View, Dimensions } from "react-native";
import Navbar from "./components/navbar";
import Chart from "./components/chart";

import LogBG from '../assets/NewLog.svg'
import MapBG from '../assets/NewMap.svg'
import FieldBG from '../assets/NewField.svg'

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#1A526B';
//
export default function HomePage() {
    return (
        <View>
            <Navbar />

            <Link href="/map" asChild>
                <Pressable style={styles.map}>
                    <MapBG width={Dimensions.get("screen").width} height={Dimensions.get('screen').width * 1.4} />
                    <Text style={[styles.text, { left: '5%' }]}>Explore Map</Text>
                </Pressable>
            </Link>
            <Link href="/guidebook/" asChild>
                <Pressable style={styles.guide}>
                    <FieldBG width={Dimensions.get("screen").width} height={Dimensions.get('screen').width} />
                    <Text style={[styles.text, { left: '55%' }]}>Field Guide</Text>
                </Pressable>
            </Link>
            <View style={{ width: '100vw', height: '50vh', top: '40vh', backgroundColor: '#113545' }}></View>
            <Link href="/log" asChild>
                <Pressable style={styles.log}>
                    <LogBG width={Dimensions.get("screen").width} height={Dimensions.get('screen').width}>
                    </LogBG>
                    <Text style={[styles.text, { left: '5%',top:'10%' }]}>Log Book</Text>
                </Pressable>
            </Link>
            <View style={styles.footer} />

            <Chart />
        </View>
    );
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: blue
    },
    map: {
        position: 'absolute',
        top: '8vh'
    },
    guide: {
        position: 'absolute',
        top: '18.5vh'
    },
    log: {
        position: 'absolute',
        top: '32vh'
    },
    text: {
        position: 'absolute',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        top: '5vh',
        left: '10vh'
    },
    footer: {
        position: 'absolute',
        top: '80vh',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        height: '20vh',
        width: '100vw',
        backgroundColor: sand
    }
})