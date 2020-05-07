import axios from "axios";
const Data = {
  getData() {
    return fetch("navent.json").then((res) => {
      try {
        return res.json();
      } catch (e) {
        return e;
      }
    });
  },
};
// return axios.get("navent.json").then((res) => {
//   try {
//     return res.data;
//   } catch (e) {
//     return e;
//   }
// });
// },
// };

export default Data;
