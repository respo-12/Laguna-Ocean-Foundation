import { Modal, Pressable, StyleSheet, View, Text, Image, TextInput, Button, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import Goff from '../../assets/Goff.jpg'
import Heisler from '../../assets/heisler.jpg'
import Treasure from '../../assets/treasureisland.jpg'
import Woods from '../../assets/woods.jpg'
import Crescent from '../../assets/crescent.jpg'
import Shaws from '../../assets/shaws.jpg'
import { Link } from "expo-router";

export default function LocationOverlay({ contents, name, onClose }) {
    let link = ""
    let imageSource = Crescent
    if (name == "Woods Cove") {
        imageSource = Woods
        link = "../guidebook/woodcove"
    } else if (name == "Heisler Park") {
        imageSource = Heisler
        link = "../guidebook/heislerpark"
    } else if (name == "Goff Cove") {
        imageSource = Goff
        link = "../guidebook/goffisland"
    } else if (name == "Treasure Island") {
        imageSource = Treasure
        link = "../guidebook/treasureisland"
    } else if (name = "Shaws Cove") {
        imageSource = Shaws
        link = "../guidebook/shawscove"
    }

    return (
        <Modal animationType="fade" visible={contents} transparent={true}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{name}</Text>
                    <View style={styles.headerX}>
                        <Pressable onPress={onClose}>
                            <AntDesign name="close" size={28} color="black" />
                        </Pressable>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, padding: 4, alignContent: 'center' }}>
                    <Image source={imageSource} style={styles.image} />
                    <View style={{gap:2.5}}>
                        <Text>{name}</Text>
                        <Text> - Miles Away</Text>
                        <Text> Commonly found:</Text>
                        <View style={{width:125,height:'30%',flexDirection:'row',gap:3,justifyContent:'center'}}>
                            <View style={styles.orgs}></View>
                            <View style={styles.orgs}></View>
                            <View style={styles.orgs}></View>
                        </View>
                        <Link href={link} style={{ alignSelf: 'flex-end',color:'blue' }}>More Info</Link>
                        
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '20%',
        width: '70%',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: '5',
        backgroundColor: 'white',
        alignSelf: 'center',
        top: '40%'
    },
    orgs: {
        height: "90%",
        width: "25%",
        backgroundColor: 'gray',
        borderRadius: 40
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        fontSize: 18,
        margin: 5
    },
    sub: {
        marginBottom: 5
    },
    desc: {
        borderColor: 'black',
        borderWidth: 2,
        fontSize: 18,
        marginVertical: 5,
        marginHorizontal: 8,
        flex: 1
    },
    header: {
        flexDirection: 'row',
        gap: 5,
        margin: 5,
        alignContent: 'center',
        justifyContent: 'flex-end'
    },
    image: {
        height: '90%',
        width: '50%',
        alignSelf: 'center',
        marginTop: '20',
        borderWidth: 1,
        borderRadius: 10
    },
    headerText: {
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'black',
        fontSize: 20,
        marginRight: 40
    },
    headerX: {
        alignSelf: 'flex-end',
        margin: 2
    }
});