import React, { useEffect } from "react";
import "./App.css";
import { Grid, Paper } from "@material-ui/core";
import NoResult from "./components/noResult/NoResult";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <div className='App'>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper elevation={3}>
            <h1>gonn</h1>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <NoResult />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
