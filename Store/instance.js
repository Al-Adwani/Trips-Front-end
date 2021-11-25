import axios from "axios";

// deema's IP
// export const baseURL = "http://192.168.8.111:8000";

// abdullah IP
export const baseURL = "http://192.168.8.130:8000";

//Faisal IP
// export const baseURL = "http://192.168.224.15:8000";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
export default instance;
