import { runInAction, makeAutoObservable } from "mobx";

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

      runInAction(() => {
        this.trips = res.data;
      });
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createTrip = async (newTrip, navigation) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) {
        formData.append(key, newTrip[key]);
      }
      const response = await instance.post("/trips", formData);

      runInAction(() => {
        this.trips.push(response.data);
      });
      navigation.navigate("TripsList");
    } catch (error) {
      console.log(error);
    }
  };

  deleteTrip = async (id, navigation) => {
    try {
      await instance.delete(`/trips/${id}`);

      runInAction(() => {
        this.trips = this.trips.filter((trip) => trip._id !== id);
      });

      navigation.navigate("TripsList");
    } catch (error) {
      console.log(error);
    }
  };

  updateTrip = async (updatetrip, navigation) => {
    try {
      const formData = new FormData();
      for (const key in updatetrip) {
        formData.append(key, updatetrip[key]);
      }
      const res = await instance.put(`/trips/${updatetrip._id}`, formData);
      this.trips = this.trips.map((trip) =>
        trip._id === updatetrip._id ? res.data : trip
      );

      navigation.navigate("TripsList");
    } catch (error) {
      console.log(error);
    }
  };

  // get totalTrips() {
  // let total = 0;
  // if (this.trips.length > 0) {
  // استخدمنا فور ايج لاني مابي اغير القيمه بس ابي اشوف الناتج الكلي مال الجمع ف ماستخدم ماب
  // this.trips.forEach((trip) => (total = total += trip.numberOfTrips));
  // return 0;
  // return total;
  // } else {
  // alert("No Trips added");
  // }

  //   get Total(){
  //     let totals =0
  //     if(numberOfTrips===0){
  //       return ("No Trips")
  //       else{
  //         (this.trips.length>=1)
  //         return(  // this.trips.forEach((trip) => (total = total += trip.numberOfTrips));
  //         )
  //       }
  //     }
  //   }
}
const tripsStore = new TripsStore();
tripsStore.fetchTrip();
export default tripsStore;
