
import { View, Pressable, Text, StyleSheet, Image, Modal, ScrollView } from "react-native";
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';



const logo = require("../../assets/lof.png");
const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function Navbar() {
    const [contents, setContents] = useState(false);
    const [wildlife, setWildlife] = useState(false);

    const hamPress = () => {
        if (contents) {
            setContents(false);
            setWildlife(false);
        }
        else {
            setContents(true);
        }
    }

    const wildPress = () => {
        if (wildlife) {
            setWildlife(false);
        }
        else {
            setWildlife(true);
        }
    }

    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.navbarcontainer}>
                <Link href="/" asChild>
                    <Pressable >
                        <Image style={styles.logo} source={logo} />
                    </Pressable>
                </Link>
                <Pressable style={styles.ham} onPress={hamPress}>
                    <Ionicons name="menu" size={50} color="black" />
                </Pressable>
            </View>
            <Modal animationType="fade" visible={contents} transparent={true} >
                <View style={styles.dropdown}>
                    <ScrollView bounces={false}>
                        <Pressable onPress={hamPress}>
                            <View style={styles.buffer} />
                        </Pressable>
                        <Link href="/map" style={styles.item}>
                            <View>
                                <Text style={styles.text}>Interactive Map</Text>
                            </View>
                        </Link>
                        <Link href="/guidebook" style={styles.item}>
                            <View>
                                <Text style={styles.text}>Field Guide</Text>
                            </View>
                        </Link>
                        <View style={styles.item}>
                            <Link href="/wildlife/">
                                <View>
                                    <Text style={styles.text}>Wildlife Directory</Text>
                                </View>
                            </Link>
                            <Pressable onPress={wildPress} >
                                <Ionicons style={styles.drop} name="chevron-down-outline" size={34} color="black" />
                            </Pressable>
                        </View>
                        {wildlife && (
                            <View>
                                <Link href="/wildlife/birds" style={styles.item2}>
                                    <View>
                                        <Text style={styles.text2}>Birds</Text>
                                    </View>
                                </Link>
                                <Link href="/wildlife/marine" style={styles.item2}>
                                    <View>
                                        <Text style={styles.text2}>Marine Mammals</Text>
                                    </View>
                                </Link>
                                <Link href="/wildlife/invertebrates" style={styles.item2}>
                                    <View>
                                        <Text style={styles.text2}>Invertebrates</Text>
                                    </View>
                                </Link>
                                <Link href="/wildlife/invasive" style={styles.item2}>
                                    <View>
                                        <Text style={styles.text2}>Invasive Species</Text>
                                    </View>
                                </Link>
                            </View>
                        )}
                        <Link href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K3RWWPRL3V7XW&source=url&ssrt=1707680553450" style={styles.item}>
                            <View>
                                <Text style={styles.text}>Help Support LOF</Text>
                            </View>
                        </Link>
                        <Link href="https://www.lagunaoceanfoundation.org/" style={styles.item}>
                            <View>
                                <Text style={styles.text}>LOF Main Website</Text>
                            </View>
                        </Link>
                        <Pressable onPress={hamPress}>
                            <View style={styles.buffer2} />
                        </Pressable>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    navbarcontainer: {
        height: '10vh',
        padding: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    logo: {
        height: 40,
        width: 150,
        margin: 5,
    },
    ham: {
        width: 50,
        margin: 5
    },
    text: {
        fontSize: 20,
        margin: 30,
        color: blue,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 20,
        margin: 30,
        marginLeft: 60,
        color: blue
    },
    buffer: {
        height: '8vh',
        width: '100vw'
    },
    buffer2: {
        height: '100vh',
        width: '100vw',
        borderTopWidth: 2
    },
    dropdown: {
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    drop: {
        margin: 30,
        alignSelf: 'flex-end'
    },
    item2: {
        width: "100%",
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: 'space-between'
    },
    item: {
        width: "100%",
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: 'space-between'
    }
});