import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Surface } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";



const AppHeader = () => {

    return (
        <Surface style={styles.header}>
            <View style={styles.headerView}>
                {<TouchableOpacity style={styles.plusIcon}>
                    <AntDesign name="plus" size={30} color={'#ddd'} />
                </TouchableOpacity>}
                <Text style={styles.headerText}>
                    asani.io
                </Text>
            </View>

            <View style={styles.headerView2}>

            </View>
            <View style={styles.headerView3}>

            </View>
        </Surface>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    header: {
        marginTop: 2,
        height: 75,
        elevation: 4,
        position: 'fixed',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 5,
    },
    headerView: {
        flex: 1,
        // backgroundColor: '#ddd',
        margin: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    plusIcon: {
        // backgroundColor:'yellow',
        flex: 1,
        paddingLeft: 12,
    },
    headerText:
    {
        // backgroundColor:'skyblue',
        color: "#3e89be",
        fontSize: 25,
        flex: 2,
    },

})