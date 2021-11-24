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
      // REVIEW: Remove console log
      console.log();
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const profileStore = new ProfileStore();

export default profileStore;
