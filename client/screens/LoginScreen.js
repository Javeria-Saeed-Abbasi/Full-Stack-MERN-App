import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigation = useNavigation();

    const handleLogin = () => {

        // For simplicity, let's check if username and password are not empty
        if (email !== '' && password !== '') {
            setLoggedIn(true);
            navigation.navigate("App");
        } else {
            setLoggedIn(false);
        }
    };
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.LogintHead1}> asani.io
            </Text>
            <Text style={styles.LogintSubText}> Innovation Meets Comfort
            </Text>
            <View style={styles.inputContainer1}
            >
                <TextInput
                    style={styles.loginInputFields}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Email"
                    autoCapitalize='none'
                    placeholderTextColor='#ddd'
                    autoCorrect={false}
                    keyboardType={"email-address"}
                />
            </View>
            <View style={styles.inputContainer1}
            >
                <TextInput
                    style={styles.loginInputFields}
                    placeholder="Password"
                    placeholderTextColor='#ddd'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}

                />
            </View>
            <View>
                <TouchableOpacity onPress={handleLogin}
                    style={styles.loginBtn}
                >
                    <Text style={styles.loginBtnText}> Continue </Text>

                </TouchableOpacity>
                {/* <Text style={{ color: "#000" }}>{JSON.stringify({ email, password }, null, 4)}</Text> */}
                {loggedIn ? (
                    <Text>Welcome, {email}!</Text>
                ) : (
                    <Text style={{ color: 'red', textAlign: 'center' }}>Please enter valid credentials</Text>
                )}
            </View>

        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    LogintHead1: {
        color: '#3e89be',
        fontSize: 50,
        fontWeight: '800',
        fontFamily: 'Poppins-Medium'
    },
    LogintSubText: {
        color: '#3e89be',
        fontSize: 12,
        fontWeight: '200',
        textTransform: 'uppercase',
        fontFamily: 'Poppins-Regular',
        paddingBottom: 40,
    },
    inputContainer1: {
        padding: 10,
        width: '95%',
    },
    loginInputFields: {
        color: '#a9a9a9',
        borderWidth: 1.5,
        borderColor: '#a9a9a9',
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 5,
        fontFamily: "regular",
        fontSize: 18,
        height: 60,
    },
    loginBtn: {
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 100,
        marginTop: 30,
    },
    loginBtnText: {
        fontSize: 20,
        // backgroundColor:'#000',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ababab',
        fontWeight: "600",

    },

})