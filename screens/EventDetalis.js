import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, } from "react-native";
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import RadioForm from 'react-native-simple-radio-button';
export default function EventDetalis() {
    var radio_props = [
        { value: 0 },
        { value: 1 }
    ];
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <View style={styles.arrowBack}>
                        <Ionicons name="ios-arrow-back" size={25} color="black" style={styles.backIcon} onPress={() => navigation.navigate("DrawerOpen")} />
                    </View>
                    <View style={styles.camera}>
                        <AntDesign name="camera" size={25} color="rgba(52, 52, 52, 0.2)" style={{ marginLeft: 230, marginTop: 4 }} />
                    </View>
                    <View style={styles.heart}>
                        <AntDesign name="heart" size={25} color="rgba(52, 52, 52, 0.2)" style={styles.heartIcon} />
                    </View>
                </View>
                <View style={styles.imgBox} >
                    <Image source={require('../assets/new_statesman_events.jpg')} style={styles.imgEvent} />
                </View>
                <View style={styles.volunteerBox}>
                    <View style={styles.boxRadioButton}>
                        <RadioForm
                            radio_props={radio_props}
                            initial={1}
                            formHorizontal={false}
                            buttonColor={'#2196f3'}
                            animation={true}
                            onPress={(value) => { value: value }}
                            style={styles.radioButton}
                            buttonSize={8}
                        />
                    </View>
                    <View style={styles.componentBox}>
                        <View style={styles.volunteer}>
                            <Text style={styles.numberVolunteer} >50 </Text>
                            <Text style={styles.txtVolunteer} >متطوع </Text>
                        </View>
                        <View style={styles.wach}>
                            <Text style={styles.numberVolunteer}>60 </Text>
                            <Text style={styles.txtVolunteer}>مشاهد </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.descriptionBox}>
                    <View style={styles.titleBox}>
                        <Text style={styles.txtTitle, { fontWeight: 'bold', fontSize: 30 }}>التفاصيل</Text>
                    </View>
                    <View style={styles.DateBox}>
                        <Text style={{ alignSelf: 'center', paddingRight: 20, fontWeight: 'bold', fontSize: 20, color: 'rgba(52, 52, 52, 0.2)' }}>2020/1/2</Text>
                        <AntDesign name="calendar" size={30} color="black" color="rgba(52, 52, 52, 0.2)" />
                    </View>
                    <View style={styles.locationBox}>
                        <Text style={{ alignSelf: 'center', paddingRight: 20, fontWeight: 'bold', fontSize: 20, color: 'rgba(52, 52, 52, 0.2)' }}>عمان المدينة الرياضية</Text>
                        <Entypo name="location-pin" size={40} color="black" color="rgba(52, 52, 52, 0.2)" />
                    </View>
                    <View style={styles.aboutBox}>
                        <Text style={{ alignSelf: 'center', paddingRight: 20, fontWeight: 'bold', fontSize: 20, color: 'rgba(52, 52, 52, 0.2)' }}>تفاصيل الحدث</Text>
                        <AntDesign name="infocirlce" size={30} color="black" color="rgba(52, 52, 52, 0.2)" />
                    </View>
                    <View style={styles.aboutText}>
                        <Text style={styles.text, { alignSelf: 'center', paddingRight: 20, fontWeight: 'bold', fontSize: 20, marginTop: 20, color: 'rgba(52, 52, 52, 0.2)', }}>
                            إذا كنت ترغب في إنشاء تطبيق جوال لمشروعك أو لشركتك، فأول سؤال سيتبادر إلى ذهنك هل تقوم ببناء التطبيق لنظام التشغيل أندرويد (Android) أم نظام (iOS)؟ الجواب السهل قد يكون أن تنشئ التطبيق على كلاهما، لتضمن لتطبيقك فرصة أكبر للنجاح والانتشار. لكنّ الحقيقة أنّ إنشاء نسختين من التطبيق؛ إحداهما لأندرويد والأخرى لـ iOS قد يكون مكلفًا من جهة الوقت والمال، لذا يجب عليك أن تختار!

                            لماذا يجب أن تختار بين أندرويد و iOS عند إنشاء تطبيق جوال؟
                            آخر شيء تريده أن تنشئ تطبيق أندرويد لتكتشف أنّ النسبة الأكبر من عملائك تعمل على iOS، أو العكس. قد لا يكون الاختيار بين النظامين سهلاً، فرغم أنّ كليهما يقدمان مزايا متشابهة إلى حد بعيد، إلا أنّ هناك بعض الفروقات من ناحية سلوكيات المستخدمين والفئات الديمغرافية وسياسة النشر وعوامل أخرى.

                            هناك حل وسطي، وهو بناء تطبيق هجين يعمل على كلا النظامين، لكنّ هذا الأمر له بعض السلبيات وقد لا يصلح للجميع. لذا سنفترض أنّك تريد إنشاء تطبيق أصلي، وسنساعدك خلال هذا المقال على اختيار المنصة المناسبة لك، إذ سنُفاضل بين المنصتين بناء على خمسة عوامل، وهي: الشريحة المستهدفة، والبيع على التطبيق وكسب المال، وتكلفة إنشاء التطبيق ووقت إنجازه، والمزايا، وسياسة النشر.
                        </Text>
                    </View>
                </View>
                <View style={styles.locationGoogle}>
                    <View style={styles.imgBox} >
                        <Image source={require('../assets/Simple-Location-Picker.png')} style={styles.imgEvent} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Cairo-Bold',
    },
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: 'white',
    },

    header: {
        flexDirection: 'row',
        top: 30,
        width: '100%',
        justifyContent: 'space-between',
        zIndex: 1,
    },
    arrowBack: {
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        borderRadius: 50,
        width: 35,
        marginLeft: 20
    },
    backIcon: {
        marginLeft: 11,
        marginTop: 5,
        marginBottom: 5,
        color: 'white',
    },
    heart: {
        marginRight: 20,
        top: 5
    },
    imgBox: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 70
    },
    imgEvent: {
        width: '100%',
        height: 208,
        borderRadius: 10,
    },
    volunteerBox: {
        width: '90%',
        height: 50,
        backgroundColor: "white",
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },
    componentBox: {
        flexDirection: 'column',
        width: '30%',
        alignItems: 'flex-end',
        paddingRight: 10,
        paddingTop: 5
    },
    volunteer: {
        flexDirection: 'row',
    },
    wach: {
        flexDirection: 'row',
    },
    numberVolunteer: {
        color: 'black',
        fontWeight: 'bold'
    },
    txtVolunteer: {
        color: '#BABABA',
        fontSize: 15
    },
    descriptionBox: {
        width: '100%',
        paddingHorizontal: 30,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 20
    },
    locationBox: {
        marginRight: -7,
        marginTop: 20,
        flexDirection: 'row',
    },
    DateBox: {
        marginTop: 20,
        flexDirection: 'row',
    },
    aboutBox: {
        marginTop: 20,
        flexDirection: 'row',
        marginRight: -5,
    },
    scrollView: {
    },
    locationGoogle: {
        paddingBottom: 30
    },
    radioButton: {
        marginTop: 4
    },
    boxRadioButton: {
        flexDirection: 'column',
        width: '70%',
        alignItems: 'flex-end',
    }
});