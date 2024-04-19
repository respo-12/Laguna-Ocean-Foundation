import { Modal, Pressable, StyleSheet, View, Text, Image, TextInput, Button, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";


export default function Form({ contents, image, onClose }) {
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const imageSource = image ? { uri: image } : require("../../assets/icon.png");

    return (
        <Modal animationType="fade" visible={contents} transparent={true}>
            <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Submit an Observation</Text>
                        <View style={styles.headerX}>
                            <Pressable onPress={onClose}>
                                <AntDesign name="close" size={28} color="black" />
                            </Pressable>
                        </View>
                    </View>
                    <Image source={imageSource} style={styles.image} />
                    <TextInput style={styles.input} placeholder="What type of Organism" />
                    <TextInput style={styles.input} placeholder="Location" />
                    <TextInput style={styles.desc} multiline={true} rows={4} placeholder="What were you doing?" />
                    <Pressable title="Submit" style={styles.sub}>
                        <Text style={{color:'white', fontSize:20}}>Submit</Text>
                    </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '80vh',
        width: '80vw',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: '5',
        backgroundColor: 'white',
        alignSelf: 'center',
        top: '13vh',
        gap: '10'
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        fontSize: 18,
        margin: 8
    },
    sub: {
        marginBottom:5,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:18,
        backgroundColor:'blue',
        width:'40vw',
        height:'5vh'
    },
    desc: {
        borderColor: 'black',
        borderWidth: 2,
        fontSize: 18,
        marginVertical:5,
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
        height: '40vh',
        width: '70vw',
        alignSelf: 'center',
        marginTop: '20',
        borderWidth:2
    },
    headerText: {
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'black',
        fontSize: 20
    },
    headerX: {
        alignSelf: 'flex-end',
        margin: 2
    }
});