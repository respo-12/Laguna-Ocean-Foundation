import Navbar from "../components/navbar";
import { StyleSheet, View, Text, ScrollView, TextInput, Pressable, Image } from "react-native";
import getOrgs from "../components/info";
import { Link } from "expo-router";
import { useState } from 'react';

const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function Invertebrates() {
    const orgs = getOrgs();
    const [invertebrates, setInvertebrates] = useState(orgs.filter(org =>
                                        org.type == "invertebrate"
                                    ));

    const handleInputChange = (inputText) => {
        setInvertebrates(orgs.filter(org =>
            org.type == "invertebrate" &&
            org.name.toLowerCase().includes(inputText.toLowerCase())
        ))
    };

    return (
        <View style={{ flexDirection: 'column', height:'100vh',width:'100vw'}}>
            <Navbar />
            <ScrollView bounces={false}>
                <View style={styles.bg}>
                    <Text style={styles.title}>Invertebrates </Text>
                    <TextInput style={styles.search_box} placeholder="Search" onChangeText={handleInputChange} />
                    <Pressable style={{justifyContent:'center',height:30,width:'20%','backgroundColor':'#003f4e',borderRadius:20,alignSelf:'flex-end',margin:10,marginRight:20}}>
                        <View>
                            <Text style={{ alignSelf:'center',color:'white'}}>Filter</Text>
                        </View>
                    </Pressable>
                    {invertebrates.map((org, i) => {
                        return (
                            <Link key={i} href={"/organism/" + org.web} style={styles.item} asChild>
                                <Pressable >
                                    <View>
                                        <Text style={styles.name}>{org.name}</Text>
                                        <View style={styles.line} />
                                        <Text style={styles.scientific}>{org.scientific}</Text>
                                    </View>
                                    <View style={styles.image}>
                                        <Image source={org.image[0]} style={{ flex: 1, borderRadius: 10 }} />
                                    </View>
                                </Pressable>
                            </Link>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    search_box: {
        backgroundColor: 'white',
        width: '90%',
        height: 30,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignSelf: 'center'
    },
    bg: {
        backgroundColor: blue,
        minHeight: '100vh',
        minWidth: '100vw'
    },
    title: {
        margin: 20,
        color: 'white',
        fontSize: 40
    },
    name: {
        fontSize: 20,
        margin: 20,
        marginBottom: 0,
        paddingBottom: 10
    },
    line: {
        borderWidth: .5,
        borderColor: blue,
        margin: 20,
        marginVertical: 0
    },
    scientific: {
        fontSize: 12,
        paddingTop: 10,
        padding: 20
    },
    image: {
        backgroundColor: 'grey',
        height: 70,
        width: 70,
        margin: 20,
        alignSelf: 'center',
        marginLeft: 'auto',
        borderRadius: 10
    },
    item: {
        backgroundColor: "white",
        borderRadius: 10,
        margin: 15,
        flexDirection: 'row'
    }
});