import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';

const sand = '#e3c088';
const blue = '#3a899b';
const black = '#000000';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here TEST VERSION
        console.log(`Username: ${username}, Password: ${password}`);
    };
    return (
        <View style={styles.container}>
            <View style={styles.loginForm}>
                <Text style={styles.login_text}>Welcome Back!</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={setUsername}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: blue,
    marginBottom: 10,
},
loginForm: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '10%',
},
input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
},
login_text: {
    color: sand,
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
},
button: {
    backgroundColor: sand,
    padding: 10,
    borderRadius: 5,
},
buttonText: {
    color: 'black',
    textAlign: 'center',
},
});