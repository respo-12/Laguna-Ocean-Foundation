import { FontAwesome } from "@expo/vector-icons";
import Navbar from "../components/navbar";
import { Link } from 'expo-router';
import { useRef } from "react";
import { StyleSheet, View, Text, ScrollView, Pressable, Image } from "react-native";
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

import WoodsPic from '../../assets/woods.jpg'

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function Crescent() {
    const initial = { lat: 33.52668289323503, lng: -117.7705841649269 };
    const map = useRef(null);
    const scrollto =(elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior:'smooth'
        })
    }
    return (
        <View style={{ flexDirection: 'column', height: '100vh', width: '100vw' }}>
            <Navbar />
            <View style={styles.outside}>
                <View style={styles.container}>
                    <Text style={styles.title}>Woods Cove</Text>
                    <Image style={styles.image} source={WoodsPic} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:'80vw' }}>
                        <Pressable onPress={() => scrollto(map)} style={{ backgroundColor: 'lightgray', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '30vw', height: '5vh', paddingHorizontal: 5 }}>
                            <FontAwesome name="map-marker" size={24} color="black" />
                            <Text style={{ justifyContent: 'center', fontWeight: 'bold' }}>Location</Text>
                        </Pressable>
                        <View style={{ backgroundColor: 'lightgray', borderRadius: 10,  justifyContent: 'space-around', alignItems: 'center', width: '40vw', height: '5vh' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Hours: 6am - 10pm</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}> YEAR ROUND</Text>
                        </View>
                    </View>
                    <Text>Woods Cove is a small yet bustling beach. It's a popular spot for locals seeking adventure by the sea, especially beloved for its vibrant community vibe. However, it’s best to visit during low-tide, as it can disappear entirely when the tide is high.</Text>
                    <View style={styles.textSection}>
                        <Text style={styles.subheading}>History</Text>
                        <Text> </Text>
                        <Text></Text>
                    </View>
                    <View style={styles.textSection}>
                        <Text style={styles.subheading}>Tidepools</Text>
                        <View style={{ flexDirection: 'row', columnGap: 30 }}>
                            <Text>The tidepool platforms are mostly composed of Monterey Formations of sandstone and siltstone. Formations created during the formation process can be seen inside the tidepools.</Text>
                            <Image style={styles.imageSmall} source={WoodsPic} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.subheading}>How To Get There</Text>
                        <Text style={{ marginVertical: 10 }}>Access Points to get to Wood's Cove</Text>
                        <ul  >
                            <li >Diamond St.</li>
                            <li>Pearl St.</li>
                        </ul>
                        <Text style={{ fontWeight: '600' }}>Recommended Parking:</Text>
                        <Text style={{ marginVertical: 10 }}></Text>
                    </View>
                    <View ref={map} style={styles.mapContainer}>
                        <APIProvider apiKey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}>
                            <Map Zoom={14} Center={initial} gestureHandling="none"
                                mapId={process.env.EXPO_PUBLIC_GOOGLE_MAP_ID} style={{ borderRadius: 20 }}>
                            </Map>
                        </APIProvider>
                    </View>
                    <View style={{ width: '70vw' }}>
                        <Text style={styles.subheading}>Amenities</Text>
                        <View style={{ flexDirection: 'row', width: '80vw', justifyContent: 'center' }}>
                            <View style={[styles.grid1, { borderBottomWidth: 2 }]}>
                                <Text style={{ width: '20vw', fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Parking</Text>
                                <Text style={{ width: '15vw', fontSize: '1.5rem', textAlign: 'center' }}>❌</Text>
                            </View>
                            <View style={[styles.grid2, { borderBottomWidth: 2 }]}>
                                <Text style={{ width: '30vw', fontSize: '1rem', textAlign: 'center' }}>Street Parking</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '80vw', justifyContent: 'center' }}>
                            <View style={[styles.grid1, { borderBottomWidth: 2}]}>
                                <Text style={{ width: '20vw', fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Bus Stop</Text>
                                <Text style={{ width: '15vw', fontSize: '1.5rem', textAlign: 'center' }}>✅</Text>
                            </View>
                            <View style={[styles.grid2, {  borderBottomWidth: 2 }]}>
                                <Text style={{ width: '30vw', fontSize: '1rem', textAlign: 'center' }}>S. Coast Hwy. Route 1-99</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '80vw', justifyContent: 'center' }}>
                            <View style={[styles.grid1, { borderBottomWidth:2 }]}>
                                <Text style={{ width: '25vw', fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Trolley Stop </Text>
                                <Text style={{ width: '15vw', fontSize: '1.5rem', textAlign: 'center' }}>✅</Text>
                            </View>
                            <View style={[styles.grid2, { borderBottomWidth: 2 }]}>
                                <Text style={{ width: '30vw', fontSize: '1rem', textAlign: 'center' }}>2,6, and 7</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '80vw', justifyContent: 'center' }}>
                            <View style={[styles.grid1, { borderBottomWidth:2 }]}>
                                <Text style={{ width: '25vw', fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Bathroom  </Text>
                                <Text style={{ width: '15vw', fontSize: '1.5rem', textAlign: 'center' }}>❌</Text>
                            </View>
                            <View style={[styles.grid2, {  borderBottomWidth: 2 }]}>
                                <Text style={{ width: '30vw', fontSize: '1em', textAlign: 'center' }}></Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '80vw', justifyContent: 'center' }}>
                            <View style={[styles.grid1]}>
                                <Text style={{ width: '25vw', fontSize: 17, fontWeight: 'bold', textAlign: 'center' }}>Shower</Text>
                                <Text style={{ width: '15vw', fontSize: 20, textAlign: 'center' }}>❌</Text>
                            </View>
                            <View style={[styles.grid2]}>
                                <Text style={{ width: '30vw', fontSize: '1rem', textAlign: 'center' }}></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: sand, width: '100vw', height: '5vh' }}></View>
        </View>
    );
}

styles = StyleSheet.create({
    mapContainer: {
        width:'80vw',
        height:'20vh'
    },
    imageSmall: {
        width: '30vw',
        borderRadius: 20,
        height: '30vw'
    },
    textSection: {
        gap: 15
    },
    subheading: {
        fontWeight: 'bold',
        fontSize: 20
    },
    grid1: {
        flexDirection: 'row',
        borderColor: lightblue,
        paddingLeft: '5vw',
        borderRightWidth: 1,
        justifyContent: 'space-evenly',
        width: '40vw',
        minHeight: '8vh',
        alignItems: 'center'
    },
    grid2: {
        borderColor: lightblue,
        borderLeftWidth: 1,
        paddingRight: '5vw',
        width: '40vw',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: '25vh',
        width: '80vw',
        borderRadius: 20,
        padding: 10,
        alignSelf: 'center'
    },
    outside: {
        backgroundColor: blue,
        minHeight: '85vh',
        minWidth: '100vw'
    },
    container: {
        margin: '5vw',
        gap: 25,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: '5vw'
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
        borderRadius: 10,
        borderColor: 'lightblue',
        borderWidth: '1',
        margin: 20,
        padding: 5
    },
    bubTitle: {
        color: '#064777',
        fontSize: 20,
        margin: 10
    },
    item: {
        margin: 5,
        color: '#064777',
        fontSize: 20,
        marginHorizontal: 10
    }
});