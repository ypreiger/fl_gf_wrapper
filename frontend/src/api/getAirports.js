import axios from "axios";

export default () => {
  return axios.get("./airports.json");
};
