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
      const res = await instance.delete(`/trips/${id}`);

      this.trips = this.trips.filter((trip) => trip._id !== id);
      navigation.navigate("TripDetail");
    } catch (error) {
      console.log(error);
    }
  };

  // updateTrip = async (updatetrip, id, navigation) => {
  //   try {
  //     const formData = new FormData();
  //     for (const key in updatetrip) {
  //       formData.append(key, updatetrip[key]);
  //     }
  //     const res = await instance.update(`/trips/${id}`);
  //     this.trips = this.trips.filter((trip) => trip._id !== id);
  //     navigation.navigate("TripDetail");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
}
const tripsStore = new TripsStore();
tripsStore.fetchTrip();
export default tripsStore;
