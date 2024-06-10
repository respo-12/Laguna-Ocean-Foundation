import Navbar from "../components/navbar";
import { StyleSheet, View, Text, ScrollView, TextInput, Pressable, Image, Platform } from "react-native";
import getOrgs from "../components/info";
import { Link } from "expo-router";
import { useState } from 'react';

const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function Wildlife() {
    const allOrgs = getOrgs();
    const [orgs, setOrgs] = useState(allOrgs);
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleInputChange = (inputText) => {
        setSearchText(inputText);
        filterOrganizations(inputText, selectedCategory);
    };

    const filterOrganizations = (searchText, category) => {
        let filteredOrgs = allOrgs.filter(org =>
            org.name.toLowerCase().includes(searchText.toLowerCase())
        );

        if (category !== 'All') {
            filteredOrgs = filteredOrgs.filter(org => org.type === category);
        }

        setOrgs(filteredOrgs);
    };

    const handleFilterPress = (category) => {
        setSelectedCategory(category);
        filterOrganizations(searchText, category);
        setShowDropdown(false);
    };

    return (
        <View style={{ flexDirection: 'column', height:'100vh',width:'100vw'}}>
            <Navbar />
            <ScrollView bounces={false}>
                <View style={styles.bg}>
                    <Text style={styles.title}>All Wildlife </Text>
                    <View style={styles.searchAndFilter}>
                    <Pressable style={styles.filterButton} onPress={() => setShowDropdown(!showDropdown)}>
                    <Text style={styles.filterButtonText}>FILTER: {selectedCategory.toUpperCase()}</Text>
                    </Pressable>
                        <TextInput style={styles.search_box} placeholder="Search" value={searchText} onChangeText={handleInputChange} />
                    </View>
                    {showDropdown && (
                        <View style={styles.dropdown}>
                            <DropdownItem category="All" onPress={() => handleFilterPress('All')} />
                            <DropdownItem category="Birds" onPress={() => handleFilterPress('bird')} />
                            <DropdownItem category="Invasive" onPress={() => handleFilterPress('invasive')} />
                            <DropdownItem category="Invertebrates" onPress={() => handleFilterPress('invertebrate')} />
                            <DropdownItem category="Marine" onPress={() => handleFilterPress('mammal')} />
                        </View>
                    )}
                    {orgs.map((org, i) => {
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

const DropdownItem = ({ category, onPress }) => {
    return (
        <Pressable style={styles.dropdownItem} onPress={onPress}>
            <Text style={{ color: 'white' }}>{category}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    searchAndFilter: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    filterButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 10,
    },
    filterButtonText: {
        color: blue,
        fontSize: 16,
        fontWeight: 'bold',
    },
    search_box: {
        backgroundColor: 'white',
        width: '20%', // Adjusted width to make it smaller
        height: 30,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginLeft: 'auto', // Aligns to the right
    },
    bg: {
        backgroundColor: blue,
        minHeight: '100vh',
        minWidth: '100vw'
    },
    title: {
        marginHorizontal: 20,
        marginVertical: 20,
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
        marginHorizontal: 20,
        marginVertical: 0
    },
    scientific: {
        fontSize: 12,
        paddingTop: 10,
        paddingHorizontal: 20
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
    },
    dropdown: {
        flexDirection: 'row',
        position: 'absolute',
        top: 80, // Adjust this value to control the dropdown position
        right: 20,
        left: 20,
        backgroundColor: '#003f4e',
        borderRadius: 10,
        padding: 10
    },
    dropdownItem: {
        padding: 10
    }
});
