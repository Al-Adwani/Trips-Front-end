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
      console.log();
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
}

const profileStore = new ProfileStore();

export default profileStore;
