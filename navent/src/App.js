import React, { useEffect } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import NoResult from "./components/noResult/NoResult";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./components/resultCard/ResultCard";
import { DATA_GET } from "./store/constants/constants";
import Data from "./function/Data";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: DATA_GET,
      payload: Data.getData(),
    });
  }, [dispatch]);
  const publication = useSelector((state) => state.aparts.data.aparts);
  return (
    <div className='App'>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <h1>gonn</h1>
        </Grid>
        <Grid item xs={8}>
          <ResultCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
