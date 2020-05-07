import React, { useEffect } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import NoResult from "./components/noResult/NoResult";
import { useDispatch, useSelector } from "react-redux";
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
  const aparts = useSelector((state) => state.aparts.data.aparts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: DATA_GET,
      payload: Data.getData(),
    });
    let getFavorites = JSON.parse(
      window.sessionStorage.getItem("favorite_aparts"),
    );
    let getSearchOptions = JSON.parse(window.sessionStorage.getItem("filters"));
    let getActiveSearch = window.sessionStorage.getItem("search_bool");

    if (getFavorites) {
      dispatch({
        type: UPDATE_FAVORITES,
        payload: getFavorites,
      });
    }
    if (getSearchOptions) {
      dispatch({
        type: UPDATE_FILTERS,
        payload: getSearchOptions,
        searchBool: getActiveSearch,
      });
    }
  }, [dispatch]);
  return (
    <div className='general-container'>
      <div className='App'>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Search />
          </Grid>
          <Grid item xs={9}>
            <List />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
