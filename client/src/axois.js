import axois from "axios";
const instance = axois.create({
  baseURL: "http://localhost:3014/",
});

export default instance;
