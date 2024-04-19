import Navbar from "../components/navbar";
import { Link } from 'expo-router';
import { StyleSheet, View, Text, ScrollView } from "react-native";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function Guidebook() {
    return (
        <View style={{ flexDirection: 'column', height:'100vh',width:'100vw'}}>
            <Navbar />
            <ScrollView bounces={false}>
                <View style={styles.outside}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Field Guide</Text>
                        <View style={styles.line}></View>
                        <View style={[styles.bubble,{borderWidth: 2}]}>
                            <Text style={styles.bubTitle}>Need to know</Text>
                            <View style={styles.line}></View>
                            <Link href="/guidebook/plantrip" style={styles.item}>Plan your trip</Link>
                            <Link href="/guidebook/tidecharts" style={styles.item}>Check Tide Charts</Link>
                            <Link href="/guidebook/explore" style={styles.item}>How to explore</Link>
                        </View>
                        <View style={[styles.bubble,{borderWidth: 2}]}>
                            <Text style={styles.bubTitle}>Locations</Text>
                            <View style={styles.line}></View>
                            <Link href="/guidebook/crescentbay" style={styles.item}>Crescent Bay</Link>
                            <Link href="/guidebook/heislerpark" style={styles.item}>Heisler Park (Main Beach)</Link>
                            <Link href="/guidebook/treasureisland" style={styles.item}>Treasure Island</Link>
                            <Link href="/guidebook/goffisland" style={styles.item}>Goff Island</Link>
                            <Link href="/guidebook/woodcove" style={styles.item}>Wood Cove</Link>
                            <Link href="/guidebook/shawscove" style={styles.item}>Shaws Cove</Link>
                        </View>
                        <View style={[styles.bubble,{borderWidth: 2}]}>
                            <Text style={styles.bubTitle}>Wildlife</Text>
                            <View style={styles.line}></View>
                            <Link href="wildlife/birds" style={styles.item}>Birds</Link>
                            <Link href="wildlife/marine" style={styles.item}>Marine Mammals</Link>
                            <Link href="wildlife/invertebrates" style={styles.item}>Invertebrates</Link>
                            <Link href="wildlife/invasive" style={styles.item}>Invasive Species</Link>
                        </View>
                        <View style={[styles.bubble,{borderWidth: 2}]}>
                            <Text style={styles.bubTitle}>Physical Environment</Text>
                            <View style={styles.line}></View>
                            <Link href="/guidebook/Geology" style={styles.item}>Geology</Link>
                            <Link href="/guidebook/intertidalzone" style={styles.item}>Inter-Tidal Zone</Link>
                            <Link href="/guidebook/sandcycles" style={styles.item}>Sand Cycles</Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

styles = StyleSheet.create({
    outside: {
        backgroundColor: blue,
        flex:1
    },
    bubTitle: {
        color: '#064777',
        fontSize: 20,
        margin: 10
    },
    container: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 40,
        flex: 1,
        paddingBottom: 70
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
    bubble: {
        borderWidth: 2,
        borderColor: lightblue,
        borderRadius: 20,
        margin: 20,
        padding: 5
    },
    item: {
        margin: 5,
        color: '#064777',
        marginHorizontal: 10
    }
});