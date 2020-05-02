import React, { useEffect } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <div className='App'>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <h1>gonn</h1>
        </Grid>
        <Grid item xs={8}>
          <h1>Capooo</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
