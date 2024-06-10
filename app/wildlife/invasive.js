import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Link } from 'expo-router'; // Make sure to import the appropriate navigation component
import Navbar from '../components/navbar'; // Assuming you have a reusable Navbar component
import getOrgs from '../components/info';

const blue = '#3a899b';

export default function Invasive() {
    const orgs = getOrgs();
    const [invasiveOrgs, setInvasiveOrgs] = useState(orgs.filter(org => org.type === 'invasive'));

    return (
        <View style={{ flexDirection: 'column', height: '100vh', width: '100vw' }}>
            <Navbar />
            <ScrollView bounces={false}>
                <View style={styles.bg}>
                    <Text style={styles.title}>Invasive</Text>
                    <View style={styles.container}>
                        <View style={styles.navbar}>
                            <Pressable>
                                <Link href="/wildlife/" style={styles.navButton}>All</Link>
                            </Pressable>
                            <Pressable>
                                <Link href="/wildlife/birds" style={styles.navButton}>Birds</Link>
                            </Pressable>
                            <Pressable>
                                <Link href="wildlife/invertebrates" style={styles.navButton}>Invertebrates</Link>
                            </Pressable>
                            <Pressable>
                                <Link href="wildlife/marine" style={styles.navButton}>Marine</Link>
                            </Pressable>
                        </View>
                    </View>
                    {invasiveOrgs.map((org, i) => {
                        return (
                            <Link key={i} href={'/organism/' + org.web} style={styles.item} asChild>
                                <Pressable>
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
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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
        borderWidth: 0.5,
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
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 15,
        flexDirection: 'row'
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 10, // Adjusted padding to make the navbar shorter
        paddingHorizontal: 10, // Adjusted padding to make the buttons closer together
        backgroundColor: '#FFFFFA',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center', // Centering the navbar horizontally
        borderRadius: 10,
        borderWidth: 1,
        borderColor: blue,
    },
    container: {
        alignItems: 'center',
    },
    navButton: {
        color: blue,
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'none',
    },
});
