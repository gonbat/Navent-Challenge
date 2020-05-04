import React, { useEffect } from "react";
import "./App.css";
import { Grid, Paper } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <div className='App'>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <h1>gonn</h1>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper elevation={3}>
            <header>BOBO</header>
            <section>OOOOOOO</section>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
