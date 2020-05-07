import React, { useEffect } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import NoResult from "./components/noResult/NoResult";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./components/resultCard/ResultCard";
import {
  DATA_GET,
  UPDATE_FAVORITES,
  UPDATE_FILTERS,
} from "./store/constants/constants";
import Data from "./function/Data";
import Search from "./components/filters/Search";
import List from "./components/list/List";
import LinearProgress from "@material-ui/core/LinearProgress";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: DATA_GET,
      payload: Data.getData(),
    });

    let memoryFavorites = JSON.parse(
      window.sessionStorage.getItem("favorite_posts"),
    );
    let memorySearchOptions = JSON.parse(
      window.sessionStorage.getItem("filters"),
    );
    let memoryActiveSearch = window.sessionStorage.getItem("search_bool");

    if (memoryFavorites) {
      dispatch({
        type: UPDATE_FAVORITES,
        payload: memoryFavorites,
      });
    }
    if (memorySearchOptions) {
      dispatch({
        type: UPDATE_FILTERS,
        payload: memorySearchOptions,
        activeSearch: memoryActiveSearch,
      });
    }
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
            <List />
            {/* {aparts.length > 0 ? <ResultCard /> : <NoResult />} */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
