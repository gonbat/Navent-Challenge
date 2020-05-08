import axios from "axios";
const Data = {
  getData() {
    return axios.get("navent.json").then((res) => {
      try {
        return res.data;
      } catch (e) {
        return e;
      }
    });
  },
};

export default Data;
