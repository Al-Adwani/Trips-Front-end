import { makeAutoObservable } from "mobx";

import { instance } from "./instance";

class ProfileStore {
  profiles = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProfile = async () => {
    try {
      const res = await instance.get("/profile");
      this.profiles = res.data;

      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createProfile = async () => {
    try {
      const response = await instance.post("/profiles", formData);
      this.profiles.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateProfile = async (updateprofile, navigation) => {
    try {
      const formData = new FormData();
      for (const key in updateprofile) {
        formData.append(key, updateprofile[key]);
      }
      const res = await instance.put(`/profile/${updateprofile._id}`, formData);
      this.profiles = this.profiles.map((profile) =>
        profile._id === updateprofile._id ? res.data : profile
      );

      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
}

const profileStore = new ProfileStore();

export default profileStore;
