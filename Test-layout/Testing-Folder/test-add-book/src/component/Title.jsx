/** @format */

import React, { useState } from "react";
const Title = ({ TitleValue, setTitleValue }) => {
  const TitleValueTargeter = (event) => {
    event.preventDefault();
    setTitleValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <label>Title</label>
      <input type="text" id="title" className="u-full-width" onChange={TitleValueTargeter} value={TitleValue} />
    </div>
  );
};
export default Title;
