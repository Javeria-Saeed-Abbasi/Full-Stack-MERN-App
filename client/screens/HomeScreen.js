import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AppHeader from "../components/AppHeader.js";
import MeterCard from '../components/MeterCard.js';
import Chart from "../components/StackBarChart.js";

const HomeScreen = () => {
    const meterCarddata = [
        { id: 1, value: '220', title: 'Voltage' },
        { id: 2, value: '100', title: 'Ampere' },
        { id: 3, value: '1200', title: 'Energy' },
        { id: 4, value: '4.5', title: 'Frequency' },
        { id: 5, value: '111', title: 'Watt' },
        { id: 6, value: '120', title: 'Power Factor' },

    ]
    return (
        <View style={styles.mainContainer}>
            <AppHeader></AppHeader>
            <View>
                <Text style={styles.head1}>POWER METER</Text>
            </View>
            <View style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly'
                }
            }>

                {meterCarddata.map((item) => (
                    <MeterCard key={item.id} item={item} />
                ))}

            </View>
            <View style={styles.chartMain}>
                <Chart></Chart>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    head1: {
        fontSize: 18,
        color: '#616471',
        // backgroundColor: 'yellow',
        padding: 20,
        margin: 10,
    }
})