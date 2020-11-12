import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer, DrawerItems } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import SingIn from "./screens/Auth/SignIn";
import SignUp from "./screens/Auth/SignUp";
import Home from "./screens/Home";
import CreateEvent from "./screens/CreateEvent";


const Drawer = createDrawerNavigator();
function CustomDrawerContentComponent(props) {
  return (
    <View style={{ paddingVertical: 60 }}>
      <View style={{ padding: 20 }}>
        <Image
          source={require("./assets/card-img-1.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 15 }}>
          kdcnjdn
        </Text>
        <Text style={{ paddingLeft: 15 }}>Bela@gmail.com</Text>
      </View>

      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert("Link to help")} />
    </View>
  );
}

function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContentComponent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="SingIn" component={SingIn} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="CreateEvent"
      >
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={AppDrawer} />
        <Stack.Screen name="CreateEvent" component={CreateEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
