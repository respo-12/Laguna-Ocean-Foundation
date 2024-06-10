import { StyleSheet } from "react-native";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

const styles = StyleSheet.create({
    outside: {
        backgroundColor: blue,
        flex: 1
    },
    bubTitle: {
        color: '#064777',
        fontSize: 20,
        margin: 10
    },
    container: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 40,
        flex: 1,
        paddingBottom: 70
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
        borderWidth: 2,
        borderColor: lightblue,
        borderRadius: 20,
        margin: 20,
        padding: 5
    },
    item: {
        margin: 5,
        color: '#064777',
        marginHorizontal: 10
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#064777'
    }
});

export default styles;
