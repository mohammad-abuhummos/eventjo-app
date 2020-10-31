import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, Button } from 'react-native-elements';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import EventCard from '../components/EventCard'
export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <LinearGradient colors={["#6AF1C5", "#3D7BF7"]} start={{ x: 0.9, y: 0.0 }} style={styles.gradient}>
                    <View style={styles.containerProfile}>
                        <View style={styles.iconsHeader}>
                            <View>
                                <MaterialCommunityIcons name="menu-open" size={50} color="white" style={styles.menuIcon} />
                            </View>
                            <View>
                                <FontAwesome name="bell" size={24} color="white" style={styles.bellIcon} />
                            </View>
                        </View>
                        <View style={styles.profileTitle}>
                            <View style={styles.profilePic}>
                                <Avatar size={70} rounded source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', }} style={styles.avatarStyle} />
                            </View>
                            <View style={styles.containerName}><Text style={styles.profileName} >Hi  , Evana</Text>
                                <Text style={styles.profileText} >Another txt</Text></View>
                        </View>
                        <View style={styles.searchSection}>
                            <TextInput style={styles.searchInput} placeholder="بحث" onChangeText={value => this.setState({ comment: value })}
                            />
                            <View style={styles.searchIcon}>
                                <LinearGradient colors={["#6AF1C5", "#3D7BF7"]} start={{ x: 0.9, y: 0.0 }} style={{ borderRadius: 15 }}>
                                    <MaterialIcons name="search" size={24} color="white" />
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
                <View style={styles.popappEventCard}>
                    <View style={styles.containerText}>
                        <View><Text style={styles.textShowEvent}>ورشات العمل القادمة</Text></View>
                        <View><Text style={styles.textShowEvent}>المشاهدات</Text></View>

                    </View>
                    <ScrollView style={styles.scrollView}>

                        <View style={styles.containerCard}>
                            <EventCard img={require("../assets/new_statesman_events.jpg")} location="Amman" date="2020-2-4" sets="200" />
                        </View>
                        <View style={styles.containerCard}>
                            <EventCard img={require("../assets/new_statesman_events.jpg")} location="Amman" date="2020-2-4" sets="200" />
                        </View>
                        <View style={styles.containerCard}>
                            <EventCard img={require("../assets/new_statesman_events.jpg")} location="Amman" date="2020-2-4" sets="200" />
                        </View>
                        <View style={styles.containerCard}>
                            <EventCard img={require("../assets/new_statesman_events.jpg")} location="Amman" date="2020-2-4" sets="200" />
                        </View>
                        <View style={styles.containerCard}>
                            <EventCard img={require("../assets/new_statesman_events.jpg")} location="Amman" date="2020-2-4" sets="200" />
                        </View>
                    </ScrollView>

                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    gradient: {
        width: "100%",
        minHeight: 300,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    profilePic: {
        backgroundColor: "white",
        width: 80,
        height: 80,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center',
    },
    containerProfile: {
        flexDirection: 'column',
    },
    profileTitle: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 50,
    },
    containerName: {
        paddingLeft: 10,
        paddingTop: 10,
    },
    profileName: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'white',

    },
    avatarStyle: {
        width: 70,
        height: 70,

    },
    profileSearch: {
        flexDirection: 'row',
    },
    profileText: {

        fontSize: 15,
        color: 'white',
    },

    iconsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        padding: 15,
    },
    searchSection: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginHorizontal: '10%',
        marginTop: 20,

    },
    searchInput: {
        paddingRight: 45,
        height: 37,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '100%'
    },
    searchIcon: {
        position: 'absolute',
        backgroundColor: 'blue',
        borderRadius: 20,
        color: 'white',
        marginTop: 6,
        right: 10,
    },
    bellIcon: {
    },
    menuIcon: {

    },
    popappEventCard: {
        marginTop: -70
    },
    containerCard: {
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.95,
        elevation: 18,
        width: '80%',
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20,

    },
    containerText: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    textShowEvent: {
        color: '#FFFFFF',
        fontSize: 20,
        paddingHorizontal: 50,
        paddingVertical: 10,
    },
    scrollView:{
        height:310
    }

});