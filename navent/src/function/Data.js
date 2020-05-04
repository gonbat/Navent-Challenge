import axios from "axios";
const Data = {
  getData() {
    return axios
      .get("navent.json")
      .then((res) => {
        try {
          return res.data;
        } catch (e) {
          return e;
        }
      })
      .then((data) => {
        return data ? data : "NOANDA!!!";
      });
  },
};

export default Data;
