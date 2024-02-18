/** @format */

import React, { useState } from "react";
const ISBN = ({ IsbnValue, setIsbnValue }) => {
  const IsbnValueTargeter = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setIsbnValue(event.target.value);
  };
  return (
    <div>
      <label>ISBN#</label>
      <input type="number" id="isbn" className="u-full-width" value={IsbnValue} onChange={IsbnValueTargeter} />
    </div>
  );
};
export default ISBN;
