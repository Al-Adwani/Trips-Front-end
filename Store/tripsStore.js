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
      // REVIEW: Remove console log
      console.log(this.trips);
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

  deleteTrip = async (id, navigation) => {
    try {
      // REVIEW: The delete does not have a response
      const res = await instance.delete(`/trips/${id}`);

      // navigation.navigate("TripsList")
      this.trips = this.trips.filter((trip) => trip._id !== id);
      navigation.navigate("TripsList");
    } catch (error) {
      console.log(error);
    }
  };
}

const tripsStore = new TripsStore();
tripsStore.fetchTrip();
export default tripsStore;
