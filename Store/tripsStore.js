import { makeAutoObservable } from "mobx";

import { instance } from "./instance";

class TripsStore {

  trips = [];
  isLoading = true;

  // trips = [
  //   {
  //     _id: "1",
  //     title: "Trip to Greece",
  //     image:
  //       "https://cdn.cnn.com/cnnnext/dam/assets/170606121035-greece---travel-destination---shutterstock-560829934.jpg",
  //     description: "Tag along to a wonedrful tour of Greece",
  //   },
  //   {
  //     _id: "2",
  //     title: "Trip to Portland Oregan",
  //     image:
  //       "https://viewfinder.expedia.com/wp-content/uploads/2018/12/best-hiking-near-portland.jpg",
  //     description: "Hike the smoky mountains of Oregan National Park",
  //   },
  // ];


  trips = [];


  constructor() {
    makeAutoObservable(this);
  }

  fetchTrip = async () => {
    try {
      const res = await instance.get("/trips");
      this.trips = res.data;
      console.log();
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

      // navigation.navigate("TripsList")
      this.trips = this.trips.filter((trip) => trip._id !== id);
      // navigation.navigate("TripsList")
    } catch (error) {}
  };
}

const tripsStore = new TripsStore();

tripsStore.fetchTrip();

 tripsStore.fetchTrip() 

export default tripsStore;
