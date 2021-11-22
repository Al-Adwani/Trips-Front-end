import { makeAutoObservable } from "mobx";

import { instance } from "./instance";

class TripsStore {
  // trips = [];
  trip-detail
  // isLoading = true;

main

  trips = [
    {
      _id: "1",
      title: "Trip to Greece",
      image:
        "https://cdn.cnn.com/cnnnext/dam/assets/170606121035-greece---travel-destination---shutterstock-560829934.jpg",
      description: "Tag along to a wonedrful tour of Greece",
    },
    {
      _id: "2",
      title: "Trip to Portland Oregan",
      image:
        "https://viewfinder.expedia.com/wp-content/uploads/2018/12/best-hiking-near-portland.jpg",
      description: "Hike the smoky mountains of Oregan National Park",
    },
  ];
trip-detail


  isLoading = true;
main
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
/* tripsStore.fetchTrip() */ export default tripsStore;
