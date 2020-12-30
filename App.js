import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { NavigationContainer, DrawerItems } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import SingIn, { removeUserToken } from "./screens/Auth/SignIn";
import SignUp from "./screens/Auth/SignUp";
import Home from "./screens/Home";
import Event from "./screens/Event";
import Welcome from "./screens/Auth/Welcome";
import CreateEvent from "./screens/CreateEvent";
import EventDetalis from "./screens/EventDetalis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showCurrentUser } from "./api";
import CompleteSignUp from "./screens/Auth/CompleteSignUp";
import * as Localization from 'expo-localization';
import * as en from './locals/en-US.json';
import * as ar from './locals/ar.json';
 // Set the key-value pairs for the different languages you want to support.
//  i18n.translations = {
//   en: en,
//   ar: ar,
// };
// // Set the locale once at the beginning of your app.
// i18n.locale = "ar";
// console.log("Localization.locale",Localization.locale)
export const AuthContext = React.createContext();

export default function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserToken, setCurrentUserToken] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const authContext = {
    currentUser,
    currentUserToken,
    setCurrentUser,
    setCurrentUserToken,
    setisLoading
  };
  const Drawer = createDrawerNavigator();
  function CustomDrawerContentComponent(props) {
    if (!!currentUser) {
      return (
        <View style={{ paddingVertical: 60 }}>
          <View style={{ padding: 20 }}>
            {!!currentUser && (
              <>
                <Image
                  source={{
                    uri: currentUser.user_img,
                  }}
                  style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 15 }}
                >
                  {currentUser.name}
                </Text>
                <Text style={{ paddingLeft: 15 }}>{currentUser.email}</Text>
              </>
            )}
          </View>

          <DrawerItemList {...props} />
          <DrawerItem label='تسجيل خروج'onPress={() => handleClickOut()} />
        </View>
      );
    } else {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <DrawerItemList {...props} />
          <DrawerItem label="'تسجيل خروج" onPress={() => handleClickOut()} />
        </View>
      );
    }
  }

  const handleClickOut = () => {
    setisAuthenticated(false);
    removeUserToken();
    setCurrentUserToken(null);
    setisLoading(false);
  };

  function AppDrawer() {
    return (
      <Drawer.Navigator
        initialRouteName="Event"
        drawerContent={(props) => <CustomDrawerContentComponent {...props} />}
      >
        <Drawer.Screen
          options={{ headerShown: false }}
          name="الصفحة الرئيسية"
          component={Home}
        />
        <Drawer.Screen
          options={{ headerShown: false }}
          name='انشاء ورشة عمل'
          component={CreateEvent}
        />
      </Drawer.Navigator>
    );
  }
  const fetchToken = async () => {
    try {
      const token = await AsyncStorage.getItem("UserToken");
      if (!!token) {
        const data = await showCurrentUser();
        await setCurrentUser(data["data"]);
        setisAuthenticated(true);
        setisLoading(false);
      } else {
        setisLoading(false);
      }
    } catch (error) {
      setisLoading(false);
    }
  };
  React.useEffect(() => {
    fetchToken();
  }, [currentUserToken]);
  const Stack = createStackNavigator();
  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {!!isAuthenticated ? (
              <>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name='الصفحة الرئيسية'
                  component={AppDrawer}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name='تفاصيل ورشة العمل'
                  component={EventDetalis}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name='مرحبا'
                  component={Welcome}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name='انشاء ورشة عمل'
                  component={CreateEvent}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name='تسجيل دخول'
                  component={SingIn}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name='1 انشاء حساب'
                  component={CompleteSignUp}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name='انشاء حساب'
                  component={SignUp}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name='ورشة العمل'
                  component={Event}
                />
               
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
