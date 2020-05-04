import React from "react";
import "./NoResult.css";

const NoResult = () => {
  return (
    <div className='no-result'>
      <h1>Su busqueda no arrojo resultados! :(</h1>
      <img src='/man.png' alt='' />
    </div>
  );
};

export default NoResult;
