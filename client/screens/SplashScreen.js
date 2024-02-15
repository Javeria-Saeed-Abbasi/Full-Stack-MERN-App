import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';


const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('LoginScreen');
        }, 3000);
    }, []);
    return (
        <LinearGradient colors={['#64C4FC', '#4C7E9C']} style={{
            height: '100%',
            justifyContent: 'center',
        }}>
            <View style={styles.SplashView}>
                <Text style={styles.SplashText}>asani.io
                </Text>
            </View>
        </LinearGradient>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    SplashView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SplashText: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 50,
        fontWeight: '800',
        fontFamily: 'Poppins-Thin',

    }
});