import Navbar from "../components/navbar";
import { Link } from 'expo-router';
import { StyleSheet, View, Text, ScrollView } from "react-native";
import styles from './index_style'; // Import the styles


export default function Guidebook() {
    return (
        <>
            <Navbar />
            <View style={styles.container}>
                <Text style={styles.title}>Field Guide</Text>
                <View style={styles.line}></View>
                <View style={[styles.bubble, { borderWidth: 2 }]}>
                    <Text style={styles.bubTitle}>Need to know</Text>
                    <View style={styles.line}></View>
                    <Link href="/guidebook/plantrip" style={styles.item}>Plan your trip</Link>
                    <Link href="/guidebook/tidecharts" style={styles.item}>Check Tide Charts</Link>
                    <Link href="/guidebook/explore" style={styles.item}>How to explore</Link>
                </View>
                <View style={[styles.bubble, { borderWidth: 2 }]}>
                    <Text style={styles.bubTitle}>Locations</Text>
                    <View style={styles.line}></View>
                    <Link href="/guidebook/crescentbay" style={styles.item}>Crescent Bay</Link>
                    <Link href="/guidebook/heislerpark" style={styles.item}>Heisler Park (Main Beach)</Link>
                    <Link href="/guidebook/treasureisland" style={styles.item}>Treasure Island</Link>
                    <Link href="/guidebook/goffisland" style={styles.item}>Goff Island</Link>
                    <Link href="/guidebook/woodcove" style={styles.item}>Wood Cove</Link>
                    <Link href="/guidebook/shawscove" style={styles.item}>Shaws Cove</Link>
                </View>
                <View style={[styles.bubble, { borderWidth: 2 }]}>
                    <Text style={styles.bubTitle}>Wildlife</Text>
                    <View style={styles.line}></View>
                    <Link href="wildlife/birds" style={styles.item}>Birds</Link>
                    <Link href="wildlife/marine" style={styles.item}>Marine Mammals</Link>
                    <Link href="wildlife/invertebrates" style={styles.item}>Invertebrates</Link>
                    <Link href="wildlife/invasive" style={styles.item}>Invasive Species</Link>
                </View>
                <View style={[styles.bubble, { borderWidth: 2 }]}>
                    <Text style={styles.bubTitle}>Physical Environment</Text>
                    <View style={styles.line}></View>
                    <Link href="/guidebook/Geology" style={styles.item}>Geology</Link>
                    <Link href="/guidebook/intertidalzone" style={styles.item}>Inter-Tidal Zone</Link>
                    <Link href="/guidebook/sandcycles" style={styles.item}>Sand Cycles</Link>
                </View>
            </View>
        </>
    )
}
