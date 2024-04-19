import Navbar from "../components/navbar";
import { StyleSheet, ScrollView, View, Text, Pressable, Image, Modal } from "react-native";
import getOrgs from "../components/info";
import { AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useState } from "react";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function Animal() {
    const [info, setInfo] = useState(true);
    const [observe, setObserve] = useState(false);
    const [pfp, setPfp] = useState(false);
    const orgs = getOrgs();
    const param = useLocalSearchParams();
    const page = param.animal;
    const [index, setIndex] = useState(0);
    const orgArray = orgs.filter(org =>
        org.web == page
    );
    const org = orgArray[0];

    const infoPress = () => {
        if (!info) {
            setInfo(true);
            setObserve(false);
        }
    }

    const observationPress = () => {
        if (!observe) {
            setInfo(false);
            setObserve(true);
        }
    }

    const pfpPress = () => {
        setPfp(!pfp);
    }

    const leftPress = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    const rightPress = () => {
        if (index < org.image.length - 1) {
            setIndex(index + 1);
        }
    }

    function Content() {
        if (info) {
            styles.button1 = {
                width: '50vw',
                height: '50vh',
                backgroundColor: '#3b8cc8',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8
            }
            styles.button2 = {
                width: '50vw',
                height: '50vh',
                backgroundColor: blue,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8
            }
            return (
                <ScrollView bounces={false}>
                <View style={styles.content}>
                    <Text style={styles.cTitle}>Where They Live</Text>
                    <View style={styles.bubble}>
                        <Text style={styles.bodyText}>{org.range}</Text>
                    </View>
                    <Text style={styles.cTitle}>Important Features</Text>
                    <View style={styles.bubble}>
                        <Text style={styles.bodyText}>{org.features}</Text>
                    </View>
                    <Text style={styles.cTitle}>Fun Facts</Text>
                    <View style={styles.bubble}>
                        <Text style={styles.bodyText}>{org.fact0}</Text>
                    </View>
                    <View style={styles.bubble}>
                        <Text style={styles.bodyText}>{org.fact1}</Text>
                    </View>
                </View>
                </ScrollView>
            );
        }
        else {
            styles.button1 = {
                width: '50vw',
                height: '50vh',
                backgroundColor: blue,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8
            }
            styles.button2 = {
                width: '50vw',
                height: '50vh',
                backgroundColor: '#3b8cc8',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8
            }
            return (
                <ScrollView bounces={false}>
                    <View style={styles.gallery}>
                        <View style={styles.bubble}>
                            <Text style={styles.bodyText}>Click on the profile picture to get a fullscreen view!</Text>
                        </View>
                        {org.image.map((flick, i) => {
                            return (
                                <Image key={i} style={styles.galleried} source={flick} />
                            )
                        })}
                    </View>
                </ScrollView>
            );
        }
    }


    return (
        <View style={{ flex: 1 }}>
            <Navbar/>
            <View style={styles.header}>
                <Pressable style={styles.image} onPress={pfpPress}>
                    <Image style={{ flex: 1, borderRadius: 70 }} source={org.image[0]} />
                </Pressable>
                <View style={styles.title}>
                    <Text style={styles.name}>{org.name}</Text>
                    <Text style={styles.scientific}>{org.scientific}</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <Pressable style={styles.button1} onPress={infoPress}>
                    <Text style={{ margin: 10, alignSelf: 'center', fontSize: 18, color: 'white' }}>Information</Text>
                </Pressable>
                <Pressable style={styles.button2} onPress={observationPress}>
                    <Text style={{ margin: 10, alignSelf: 'center', fontSize: 18, color: 'white' }}>Gallery</Text>
                </Pressable>
            </View>
            <View style={styles.container}>
                <Content/>
            </View>
            <View style={{backgroundColor:sand,  width:'100vw',height:'10vh'}}></View>
            <Modal animationType="fade" visible={pfp} transparent={true}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
                    <View style={[styles.modalContainer]}>
                        <View style={styles.galleryHead}>
                            <View style={styles.headerX}>
                                <Pressable onPress={pfpPress}>
                                    <AntDesign name="close" size={28} color="white" />
                                </Pressable>
                            </View>
                        </View>
                        <Image source={org.image[index]} style={styles.galleryImage} />
                        <View style={styles.arrowContainer}>
                            <Pressable onPress={leftPress}>
                                <AntDesign name="arrowleft" size={44} color="white" />
                            </Pressable>
                            <Pressable onPress={rightPress}>
                                <AntDesign name="arrowright" size={44} color="white" />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
        
    );

}

const styles = StyleSheet.create({
    header: {
        width: '100vh',
        height: '25vh',
        flexDirection: 'row'
    },
    arrowContainer: {
        flexDirection: 'row',
        top: '25%',
        justifyContent: 'space-evenly'
    },
    galleryHead: {
        flexDirection: 'column',
        width: '100%',
        height: '10%',
        padding: 10
    },
    headerX: {
        alignSelf: 'flex-end'
    },
    galleryImage: {
        width: '75%',
        height: '50%',
        top: '10%',
        borderRadius: 20,
        overflow: 'visible',
        alignSelf: 'center'
    },
    modalContainer: {
        height: '50%',
        width: '85%',
        alignSelf: 'center',
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        top: '25%'
    },
    image: {
        marginVertical: 40,
        margin: 30,
        backgroundColor: 'lightblue',
        borderRadius: 85,
        height: 120,
        width: 120
    },
    gallery: {
        backgroundColor: 'lightblue',
        flex: 1,
        margin: 20,
        padding: 15,
        borderRadius: 20,
        gap: 10,
        alignItems: 'center'
    },
    galleried: {
        height:200,
        width:250,
        borderRadius: 5
    },
    title: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cTitle: {
        color: '#064777',
        margin: 10,
        fontSize: 20
    },
    name: {
        fontSize: 18,
        margin: 1,
        marginBottom: 10,
        color: "black",
        fontWeight: 'bold'
    },
    scientific: {
        fontSize: 13,
        fontStyle: 'italic'
    },
    buttons: {
        height: '5vh',
        width: '100vw',
        flexDirection: 'row'
    },
    button1: {
        width: '50%',
        height: '100%',
        backgroundColor: blue,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    button2: {
        width: '50%',
        height: '100%',
        backgroundColor: '#3b8cc8',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    container: {
        flex: 1,
        backgroundColor: blue,
        paddingBottom:10
    },
    body: {
        flex: 1
    },
    content: {
        backgroundColor: 'lightblue',
        flex: 1,
        margin: 20,
        padding:5,
        borderRadius: 20,
        gap: 5
    },
    bubble: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 10,
        margin: 5
    },
    bodyText: {
        padding: 5
    }
});