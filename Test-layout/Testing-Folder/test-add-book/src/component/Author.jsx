/** @format */

import React, { useState } from "react";

const Author = ({ AuthorValue, setAuthorValue }) => {
  const AuthorValueTarget = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setAuthorValue(event.target.value);
  };
  return (
    <div>
      <label>Author</label>
      <input type="text" id="author" className="u-full-width" onChange={AuthorValueTarget} value={AuthorValue} />
    </div>
  );
};
export default Author;
