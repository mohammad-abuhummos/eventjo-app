import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserToken = async () => {
  let UserToken = "";
  try {
    UserToken = await AsyncStorage.getItem("UserToken");
  } catch (e) {
    console.log("e", e);
  }
  const token = "Bearer" + UserToken;
  return token;
};

let Axios = axios.create({
  baseURL: "https://immense-dusk-78248.herokuapp.com/api/",
  headers: {
    Accept: "application/json",
  },
  responseType: "json",
  contentType: "application/json",
});

export default Axios;

Axios.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = await getUserToken();
    return config;
  },
  (error) => Promise.reject(error)
);

export const showCurrentUser = () => {
  return Axios.get(`auth/me`);
};
