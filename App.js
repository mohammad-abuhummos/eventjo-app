import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
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
import Welcome from "./screens/Auth/Welcome";
import CreateEvent from "./screens/CreateEvent";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Axios from "axios";
import { showCurrentUser } from "./api";
 


// export const getUserToken = async () => {
//   try {
//     const UserToken = await AsyncStorage.getItem("UserToken");
//     console.log(UserToken);
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const singin = async (userinfo) => {
//   try {
//     const resp = await axios.get(
//       `https://immense-dusk-78248.herokuapp.com/api/auth/login`,
//     );
//     console.log();
//   } catch (err) {
//     // Handle Error Here
//     console.error(err);
//   }
// };



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
      <Drawer.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Drawer.Screen options={{ headerShown: false }} name="SingIn" component={SingIn} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [guestToken, setGuestToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);

console.log("currentUser",currentUser)
  const fetchUser = async () => {
    try {
      const token = await AsyncStorage.getItem('UserToken');
      console.log('got tolke', token);
      if (!!token) {
        const {data} = await showCurrentUser();
        console.log('user data', data);
        await setCurrentUser(data);
        setisAuthenticated(true);
      }
    } catch (error) {
      console.log('token error', error);
    }
  };
  React.useEffect(() => {
    fetchUser();
  }, []);







  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="CreateEvent"
      >
        <Stack.Screen options={{ headerShown: false }} name="SingIn" component={SingIn} />
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={AppDrawer} />
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
        <Stack.Screen options={{ headerShown: false }} name="CreateEvent" component={CreateEvent} />
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
