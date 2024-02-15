import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js'
import Feather from "react-native-vector-icons/Feather.js";
import Octicons from "react-native-vector-icons/Octicons.js";
import FontAwesome from "react-native-vector-icons/FontAwesome.js";
import HomeScreen from '../screens/HomeScreen.js';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: Platform.OS !== 'ios',
                tabBarStyle: [
                    {
                        display: 'flex',
                        backgroundColor: '#fff',
                        width: '100%',
                        height: 75,
                        borderTopLeftRadius: (15, 0.1),
                        borderTopRightRadius: (15, 0.1),
                        elevation: 0,
                        position: 'absolute',
                        paddingHorizontal: 12,
                    },
                    null,
                ],
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabsMain
                        }>
                            <MaterialCommunityIcons name="view-dashboard-outline" color={focused ? "#3e89be" : "grey"} size={30} />
                            <Text style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: focused ? "#3e89be" : "grey"
                            }}
                            >Dashboard</Text>
                        </View>

                    ),
                }}

            />

            <Tab.Screen
                name="Home4"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabsMain
                        }>
                            <MaterialCommunityIcons name="devices" color={focused ? "#3e89be" : "grey"} size={30} />
                            <Text style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: focused ? "#3e89be" : "grey"
                            }}
                            >Devices</Text>
                        </View>

                    ),
                }}
            />
            <Tab.Screen
                name="Home1"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabsMain
                        }>
                            <Feather name="users" color={focused ? "#3e89be" : "grey"} size={30} />
                            <Text style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: focused ? "#3e89be" : "grey"
                            }}
                            >Referral</Text>
                        </View>

                    ),
                }}
            />
            <Tab.Screen
                name="Home2"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabsMain
                        }>
                            <Octicons name="tools" color={focused ? "#3e89be" : "grey"} size={30} />
                            <Text style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: focused ? "#3e89be" : "grey"
                            }}
                            >Support</Text>
                        </View>

                    ),
                }}
            />
            <Tab.Screen
                name="Home3"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabsMain
                        }>
                            <FontAwesome name="user-o" color={focused ? "#3e89be" : "grey"} size={30} />
                            <Text style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: focused ? "#3e89be" : "grey"
                            }}
                            >Account</Text>
                        </View>

                    ),
                }}
            />
        </Tab.Navigator>

    )
}

export default BottomTabs

const styles = StyleSheet.create({
    tabsMain:
    {
        // backgroundColor:'yellow',
        alignItems: 'center',
        justifyContent: 'center',

    },

})