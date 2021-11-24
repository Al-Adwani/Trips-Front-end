import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
class UserAuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }
  signup = async (userData, navigation, toast) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      navigation.navigate("Home");
    } catch (error) {
      //   toast.show({
      //     title: "Check your user name/password",
      //     // status:"info" يطلع شكل ثاني
      //     status: "error",
      //     description: "Wrong Password",
      //   });
    }
  };

  signin = async (user, navigation, toast) => {
    try {
      const res = await instance.post("/signin", user);
      this.setUser(res.data.token);
      navigation.navigate("Home");
    } catch (error) {
      // toast.show({
      //   title: "Check your user name/password",
      //   // status:"info" يطلع شكل ثاني
      //   status: "error",
      //   description: "Wrong Password",
      // });
    }
  };
  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      this.user = decode(token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error) {}
  };
  logout = async () => {
    try {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("myToken");
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };
  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("myToken");
      if (token) {
        const currentTime = Date.now();
        let tempUser = decode(token);
        if (tempUser.exp >= currentTime) {
          this.setUser(token);
        } else {
          this.logout();
        }
      }
    } catch (error) {}
  };
}
const userAuthStore = new UserAuthStore();
userAuthStore.checkForToken();
export default userAuthStore;
