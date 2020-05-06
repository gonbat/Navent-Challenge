import React, { useEffect } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import NoResult from "./components/noResult/NoResult";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./components/resultCard/ResultCard";
import { DATA_GET } from "./store/constants/constants";
import Data from "./function/Data";
import Search from "./components/filters/Search";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: DATA_GET,
      payload: Data.getData(),
    });
  }, [dispatch]);
  const aparts = useSelector((state) => state.aparts.data.aparts);
  return (
    <div className='general-container'>
      <div className='App'>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Search />
          </Grid>
          <Grid item xs={9}>
            {aparts.length > 0 ? <ResultCard /> : <NoResult />}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
