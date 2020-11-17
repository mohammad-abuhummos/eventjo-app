import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const getUserToken = async () => {
  let UserToken = '';
  try {
    const UserToken = await AsyncStorage.getItem("UserToken");
    console.log(UserToken);
  } catch (e) {
    console.log(e);
  }
  const token = 'Bearer ' + UserToken;
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

export default Axios

// Axios.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = getUserToken();
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export const showCurrentUser = () => {
  return Axios.post(`auth/me?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9pbW1lbnNlLWR1c2stNzgyNDguaGVyb2t1YXBwLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwMzc1MjA5OSwibmJmIjoxNjAzNzUyMDk5LCJqdGkiOiI3S0RBZm4xdzhRdERXZmlQIiwic3ViIjoxNTIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.Hj7Hb4Ca9bU32ukJ0Wy87r9yBpFdWO4-F1BPdiDanqE`);
};
