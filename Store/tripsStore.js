import { makeAutoObservable } from "mobx";

import { instance } from "./instance";

class TripsStore {
  trips = [];
  isLoading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchTrip = async () => {
    try {
      const res = await instance.get("/trips");
      this.trips = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createTrip = async (newTrip) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) {
        formData.append(key, newTrip[key]);
      }
      const response = await instance.post("/trips", formData);
      this.trips.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const tripsStore = new TripsStore();
tripsStore.fetchTrip();
export default tripsStore;
