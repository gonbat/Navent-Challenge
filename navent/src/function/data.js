const data = {
  getData() {
    return axios
      .get("navent.json")
      .then((res) => {
        try {
          return res.data.json();
        } catch (e) {
          return e;
        }
      })
      .then((data) => {
        return data ? data : "NOANDA!!!";
      });
  },
};
