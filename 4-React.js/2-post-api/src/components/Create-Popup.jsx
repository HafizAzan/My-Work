/** @format */

import React, { useState } from "react";
import Swal from "sweetalert2";
import { BaseApiUrl } from "../App";

const CreatePopup = ({ getPosts }) => {
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);
  const ValueWithTitle = (event) => {
    event.preventDefault();
    setTitleValue(event.target.value);
    console.log(event.target.value);
  };

  const bodyWithValue = (event) => {
    event.preventDefault();
    setBodyValue(event.target.value);
    console.log(event.target.value);
  };

  const SubmitFormWithValues = (event) => {
    event.preventDefault();
    if (!titleValue || !bodyValue) {
      Swal.fire("Plz Fill This Form Thanks", "", "error");
      return;
    }
    setDisabledBtn(true);
    const submitWork = {
      titleValue,
      bodyValue,
    };

    fetch(BaseApiUrl, {
      method: "POST",
      body: JSON.stringify(submitWork),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => {
        setTitleValue("");
        setBodyValue("");
        Swal.fire("Your Form Is Submited!", "", "success");
        setDisabledBtn(false);
        window.$("#create-post").modal("hide");
        getPosts();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Your Form Is Not Submited!", "plz try again!", "error");
        setDisabledBtn(false);
      });
  };
  return (
    <div className="modal fade" id="create-post">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 className="modal-title">Create Post</h4>
          </div>
          <div className="modal-body">
            <form action="" method="POST" role="form" id="create-post-form" onSubmit={SubmitFormWithValues}>
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" id="post_title" placeholder="Title" onChange={ValueWithTitle} value={titleValue} />
              </div>

              <div className="form-group">
                <label>Body</label>
                <textarea name="" id="post_body" cols="30" rows="10" placeholder="Body" className="form-control" onChange={bodyWithValue} value={bodyValue}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={disabledBtn}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePopup;
