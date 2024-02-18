/** @format */

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Title from "./component/Title";
import Author from "./component/Author";
import ISBN from "./component/ISBN";
import Tbody from "./component/Tbody";

function App() {
  const [IsbnValue, setIsbnValue] = useState("");
  const [TitleValue, setTitleValue] = useState("");
  const [AuthorValue, setAuthorValue] = useState("");
  const [ArraysTitleValue, setArraysTitleValue] = useState([]);
  const [ArraysAuthorValue, setArraysAuthorValue] = useState([]);
  const [ArraysIsbnValue, setArraysIsbnValue] = useState([]);

  const SubmitForm = (event) => {
    event.preventDefault();
    if (!TitleValue || !AuthorValue || !IsbnValue) {
      alert("oops please fill this form okay.");
      return;
    }
    console.log("Working");

    const TempraryTitle = [...ArraysTitleValue];
    TempraryTitle.push(TitleValue);
    console.log(TempraryTitle);
    setArraysTitleValue(TempraryTitle);
    setArraysTitleValue("");

    const TempraryAuthor = [...ArraysAuthorValue];
    TempraryAuthor.push(AuthorValue);
    console.log(TempraryAuthor);
    setArraysAuthorValue(TempraryAuthor);
    setArraysAuthorValue("");

    const TempraryIsbn = [...ArraysIsbnValue];
    TempraryIsbn.push(IsbnValue);
    console.log(TempraryIsbn);
    setArraysIsbnValue(TempraryIsbn);
    setArraysIsbnValue("");
  };
  return (
    <div className="container">
      {/* <div className="alert success">success alert</div>
      <div className="alert error">error alert</div> */}
      <h1>Add Book</h1>
      <form id="book-form" onSubmit={SubmitForm}>
        <Title TitleValue={TitleValue} setTitleValue={setTitleValue} />
        <Author AuthorValue={AuthorValue} setAuthorValue={setAuthorValue} />
        <ISBN IsbnValue={IsbnValue} setIsbnValue={setIsbnValue} />
        <div>
          <input type="submit" value="Submit" className="u-full-width" />
        </div>
      </form>
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Trash</th>
          </tr>
        </thead>
        <Tbody ArraysTitleValue={ArraysTitleValue} ArraysAuthorValue={ArraysAuthorValue} ArraysIsbnValue={ArraysIsbnValue} />
      </table>
    </div>
  );
}

export default App;
