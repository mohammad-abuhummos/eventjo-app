import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, colors, Input,Icon } from 'react-native-elements';
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function SignUp() {

    return (
        <View style={styles.container}>
            <LinearGradient colors={["#6AF1C5", "#3D7BF7"]} start={{ x: 0.9, y: 0.0 }} style={styles.gradient}>
                <View style={styles.iconsHeader}>
                </View>
                <View style={styles.profileTitle}>
                    <View style={styles.profilePic}>
                        <Avatar size={70} rounded source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', }} />
                    </View>
                    <View><Text style={styles.profileName} >Hi  , Evana</Text></View>
                    <View><Text style={styles.profileText} >Another txt</Text></View>
                    <View><Text style={styles.profileFeatured} >فعاليات مميزة</Text></View>
                    <View><Text style={styles.profileAllEvent} >مشاهدة الكل</Text></View>
                </View>
                <View style={styles.searchSection}>
                    <TextInput style={styles.searchInput} placeholder="بحث"  onChangeText={value => this.setState({ comment: value })}
                    />
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",

    },
    gradient: {
        width: "100%",
        height: 300,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    profilePic: {
        top: 80,
        marginLeft: 40,
        backgroundColor: "white",
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    profileTitle: {

    },
    profileName: {
        marginLeft: 140,
        fontSize: 25,
        fontWeight: "bold",
        color: 'white',
        top: 15,
    },
    profileSearch: {

    },
    profileText: {
        marginLeft: 140,
        fontSize: 15,
        color: 'white',
        top: 15,
    },
    profileAllEvent: {
        marginRight: 30,
        fontSize: 15,
        color: 'white',
        top: 75,

    },
    profileFeatured: {
        marginRight: 270,
        fontSize: 17,
        color: 'white',
        top: 95,
        fontWeight: "bold",
    },
    iconsHeader: {
        borderLeftWidth: 4,
        borderRightWidth: 4,
        height: 10
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        width: "80%",
        marginLeft:50,
    },
    searchInput: {
        paddingRight: 30,
        height: 37,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius:20,
        shadowColor:'gray',
        flex: 1,

    },

  
   

});