/** @format */

import React from "react";

function SpinnerLoader({ loader }) {
  return (
    loader && (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    )
  );
}

export default SpinnerLoader;
