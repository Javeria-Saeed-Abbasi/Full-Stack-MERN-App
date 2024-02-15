import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Card } from "react-native-paper";

const MeterCard = ({ item }) => {
    return (
        <View style={styles.mainContainer}>
            <Card style={styles.mainCard}>
                <Card.Content style={styles.cardContent}>
                    <Text style={styles.textValue}>{item.value}</Text>
                    <Text style={styles.textHead}>{item.title}</Text>
                </Card.Content>
                <Card.Actions>
                </Card.Actions>
            </Card>
        </View>

    )
}

export default MeterCard

const styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor:'blue',
        width: '35%',
        height: 65,
        marginBottom: 40,
    },
    mainCard: {
        backgroundColor: '#fff',
        color: '#000',
        width: '100%',
        height: 'auto',
        borderRadius: 5,


    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor:'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textValue: {
        color: '#198cf0',
        fontSize: 28,
        fontWeight: '800',
        letterSpacing: 1
    },
    textHead: {
        color: '#616471',
        fontSize: 13,
        fontWeight: '200',
        letterSpacing: 1
    }
})