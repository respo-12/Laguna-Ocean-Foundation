import { Modal, Pressable, StyleSheet, View, Text, Image, TextInput, Button, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';




export default function Context({ contents, onClose }) {

    return (
        <Modal animationType="fade" visible={contents} transparent={true}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>How to Use this Map</Text>
                    <View style={styles.headerX}>
                        <Pressable onPress={onClose}>
                            <AntDesign name="close" size={28} color="black" />
                        </Pressable>
                        
                    </View>
                </View>
                <Text style={{margin:'3vh', marginBottom:'.5vh'}}> Hi there! What you're looking at right now is the map of the Laguna Ocean area! The areas that are highlighted with Red are considered No Take Zone and so taking animals are organisms from these areas are not allowed, while the purple areas are limited take with their own rules and regulations so double check before visiting these areas!</Text>
                <Text style={{margin:'3vh', marginTop:'.5vh'}}> Highlighted on the map are the locations of our tidepools, just be sure to click on any of these markers twice to get additional information as well as visit the location page for info such as accessibility options and the history of the site!</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '70vh',
        width: '70vw',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: '5',
        backgroundColor: 'white',
        alignSelf: 'center',
        top: '15vh',
        gap: '10'
    },
    headerText: {
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'black',
        fontSize: 20
    },
    header: {
        flexDirection: 'row',
        gap: 5,
        margin: 5,
        alignContent: 'center',
        justifyContent: 'flex-end'
    },
    headerX: {
        alignSelf: 'flex-end',
        margin: 2
    }
});