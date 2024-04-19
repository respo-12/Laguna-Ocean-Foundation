import Navbar from "./components/navbar";
import { Pressable, StyleSheet, View, Text,Image } from "react-native";
import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { Polygon } from "./components/polygon";
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Link } from "expo-router";
import { useState } from 'react';
import Form from "./components/form";
import Context from "./components/context";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function MapPage() {
    const [image, setImage] = useState(null);
    const [form, setForm] = useState(false);
    const [location, setLocation] = useState(false);
    const [name, setName] = useState(null);
    const [context, setContext] = useState(false);
    const [open, setOpen] = useState(false);
    const [locImage,setlocImage]=useState(null);
    const [position,setPosition]=useState(null);
    const [locName,setlocName]=useState("");
    const [loclink,setloclink]=useState("");

    const [status, requestPermission] = ImagePicker.useCameraPermissions();

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            formPress();
        } else {
            alert('You did not select any image.');
        }
    };

    const takeImageAsync = async () => {
        let result = await ImagePicker.requestCameraPermissionsAsync();
        if (result.granted) {
            let photo = await ImagePicker.launchCameraAsync();
            if (!photo.canceled) {
                setImage(photo.assets[0].uri);
                formPress();
            } else {
                alert('You did not select any image.')
            }
        }
    }

    const formPress = () => {
        setForm(!form);
    }

    const contextPress = () => {
        setContext(!context);
    }

    const calloutPress = loc => {
        setName(loc);
        locPress();
    }

    const locPress = () => {
        setLocation(!location);
    }

    const initial = { lat: 33.535640952240556, lng: -117.7782005607177 };
    const heisler = { lat: 33.542717357425645, lng: -117.78775366836816 };
    const treasure = { lat: 33.51217204824447, lng: -117.75471398882044 };
    const goff = { lat: 33.5144401925707, lng: -117.76024766002828 };
    const shaws = { lat: 33.54570202275875, lng: -117.79838512444839 };
    const wood = { lat: 33.52668289323503, lng: -117.7705841649269 };
    const crescent = { lat: 33.54661984078583, lng: -117.8015687552509 };
    return (
        <View>
            <Navbar />
            <View style={{ backgroundColor: blue, height: '90vh' }}>
                <View style={styles.container}>
                    <APIProvider apiKey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}>
                        <Map defaultZoom={12} defaultCenter={initial} mapTypeControl={false} streetViewControl={false} zoomControl={false}
                            mapId={process.env.EXPO_PUBLIC_GOOGLE_MAP_ID} style={{ borderRadius: 20 }}>
                            <AdvancedMarker position={heisler} onClick={() => {setloclink("guidebook/heislerpark");setOpen(true);setPosition(heisler); setlocName("Heisler Park"); setlocImage("../assets/heisler.jpg")}}></AdvancedMarker>
                            <AdvancedMarker position={treasure} onClick={() =>{setloclink("guidebook/treasureisland");setOpen(true);setPosition(treasure); setlocName("Treasure Island"); setlocImage("../assets/treasureisland.jpg")}}></AdvancedMarker>
                            <AdvancedMarker position={wood} onClick={() => {setloclink("guidebook/woodcove");setOpen(true); setPosition(wood); setlocName("Wood's Cove"); setlocImage("../assets/woods.jpg")}}></AdvancedMarker>
                            <AdvancedMarker position={shaws} onClick={() => {setloclink("guidebook/shawscove");setOpen(true);setPosition(shaws); setlocName("Shaw's Cove"); setlocImage("../assets/shaws.jpg")}}></AdvancedMarker>
                            <AdvancedMarker position={goff} onClick={() => {setloclink("guidebook/goffisland");setOpen(true);setPosition(goff); setlocName("Goff's Cove"); setlocImage("../assets/Goff.jpg")}}></AdvancedMarker>
                            <AdvancedMarker position={crescent} onClick={() => {setloclink("guidebook/crescentbay");setOpen(true);setPosition(crescent); setlocName("Crescent Bay"); setlocImage("../assets/crescent.jpg")}}></AdvancedMarker>
                            <Polygon fillColor="rgba(128,0,128)" strokeWeight={1} paths={[{ lat: 33.501662749630415, lng: -117.74394829807281 },
                            { lat: 33.51010784053889, lng: -117.7513786777854 },
                            { lat: 33.51350654233734, lng: -117.75599341839552 },
                            { lat: 33.54289254369832, lng: -117.7843165397644 },
                            { lat: 33.54844469589551, lng: -117.80504163354635 },
                            { lat: 33.50191694448255, lng: -117.79865495860577 }]} />
                            <Polygon fillColor="rgba(255,0,0,.8)" strokeWeight={1} paths={[{ lat: 33.54844469589551, lng: -117.80504163354635 },
                            { lat: 33.5765423603528, lng: -117.8419528529048 },
                            { lat: 33.597069886301014, lng: -117.87875175476074 },
                            { lat: 33.59112518193325, lng: -117.87873063236475 },
                            { lat: 33.5419121648292, lng: -117.80427049845457 }]} />
                            <Polygon fillColor="rgba(255,0,0,.8)" strokeWeight={1} paths={[{ lat: 33.501662749630415, lng: -117.74394829807281 },
                            { lat: 33.483416258162265, lng: -117.72487711161375 },
                            { lat: 33.46106071867834, lng: -117.7086041495204 },
                            { lat: 33.456739081173, lng: -117.71434474736452 },
                            { lat: 33.50163233818496, lng: -117.74752534925938 }]} />
                            {open && (
                                <Pressable onClick={() => alert("hi!")} >
                                    <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                                        <Link href={loclink}>
                                            <View style={{ flexDirection: 'row', flex: 1, padding: 0, alignContent: 'center',gap:5 }}>
                                                <Image source={locImage} style={styles.image} />
                                                <View style={{ gap: 2 }}>
                                                    <Text>{locName}</Text>
                                                    <Text> - Miles Away</Text>
                                                    <Text> Commonly found:</Text>
                                                    <View style={{ width: '15vw', height: '2vh', flexDirection: 'row', gap: 3, justifyContent: 'center' }}>
                                                        <View style={styles.orgs}></View>
                                                        <View style={styles.orgs}></View>
                                                        <View style={styles.orgs}></View>
                                                    </View>
                                                </View>
                                            </View>
                                        </Link>
                                    </InfoWindow>
                                </Pressable>
                            )}
                        </Map>
                    </APIProvider>
                </View>
                <Pressable style={styles.contextButton} onPress={contextPress}>
                    <AntDesign name="question" size={34} color="white" />
                </Pressable>
                <Pressable style={styles.mpabutton} onPress={pickImageAsync}>
                    <AntDesign name="picture" size={44} color="white" />
                </Pressable>
                <Pressable style={styles.cambutton} onPress={takeImageAsync}>
                    <AntDesign name="camerao" size={74} color="white" />
                </Pressable>
                <Pressable style={styles.formbutton} onPress={formPress}>
                    <AntDesign name="form" size={44} color="white" />
                </Pressable>
                <View style={styles.legend}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Map Key</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.legendBubble, { backgroundColor: 'red' }]} />
                        <Text> No take Zone</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.legendBubble, { backgroundColor: 'purple' }]} />
                        <Text> Limited take Zone</Text>
                    </View>
                </View>
                <Form contents={form} image={image} onClose={formPress} />
                <Context contents={context} onClose={contextPress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    orgs: {
        height: "2vh",
        width: "3.5vw",
        backgroundColor: 'gray',
        borderRadius: 40
    },
    image: {
        height: '10vh',
        width: '15vw',
        alignSelf: 'center',
        marginTop: '20',
        borderWidth: 1,
        borderRadius: 10
    },
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
        justifySelf: 'center',
        alignItems: 'center',
        height: '80vh',
        margin: 30,
        width: '80vw',
        borderRadius: 20

    },
    footer: {
        position: 'absolute',
        top: '98vh',
        height: '2vh',
        width: '100vw',
        backgroundColor: sand
    },
    legend: {
        position: 'absolute',
        backgroundColor: 'rgba(17, 53, 69, 0.6)',
        borderRadius: 20,
        height: '12vh',
        width: '40%',
        justifyContent: 'center',
        gap: 10,
        top: '5vh',
        left: '11vw',
        padding: 8,
    },
    legendBubble: {
        borderRadius: '20',
        height: '100%',
        width: '12%',
        borderColor: 'black',
        borderWidth: 1
    },
    map: {
        height: '100vh',
        width: '100vw'

    },
    contextButton: {
        position: 'absolute',
        borderRadius: 100,
        backgroundColor: 'black',
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        top: '2vh',
        left: '80vw'
    },
    formbutton: {
        position: 'absolute',
        borderRadius: 100,
        backgroundColor: '#008080',
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        top: '80vh',
        left: '65vw'

    },
    mpabutton: {
        position: 'absolute',
        borderRadius: 100,
        backgroundColor: '#008080',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
        top: '80vh',
        left: '20vw'

    },
    cambutton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#035252',
        height: 110,
        width: 110,
        top: '74vh',
        left: '37vw'
    }

});