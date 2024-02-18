/** @format */

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { BaseApiUrl } from "../App";

function EditPost({ editPostId, getPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (editPostId) {
      console.log(editPostId);
      getPostsByIds(editPostId);
    }
  }, [editPostId]);

  const getPostsByIds = (postId) => {
    fetch(`${BaseApiUrl}/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTitle(data?.title);
        setBody(data?.body);
      })
      .catch((error) => console.error(error));
  };

  const InputChangeFeilds = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const bodyChangeFeilds = (event) => {
    event.preventDefault();
    setBody(event.target.value);
  };

  function SubmitForm(event) {
    event.preventDefault();
    if (!title || !body) {
      Swal.fire("sorry Apne Fill Nhi kia", "Plz Fill Kren!", "error");
      return;
    }
    setDisabled(true);
    let bodyBody = {
      title,
      body,
    };

    fetch(`${BaseApiUrl}/${editPostId}`, {
      method: "PUT",
      body: JSON.stringify(bodyBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        // setTitle("");
        // setBody("");
        Swal.fire("Your Form Is Updated & Submited", "", "success");
        window.$("#edit-post").modal("hide");
        setDisabled(false);
        getPosts();
      })
      .catch((error) => {
        console.error(error);
        setDisabled(false);
        Swal.fire("Your Form Is Not Submited", "Plz Submit It", "error");
        return;
      });
  }

  return (
    <div className="modal fade" id="edit-post">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 className="modal-title">Edit Post</h4>
          </div>
          <div className="modal-body">
            <form action="" method="POST" role="form" id="edit-post-form" onSubmit={SubmitForm}>
              <input type="hidden" name="post_id" id="edit_post_id" />
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" id="edit_post_title" placeholder="Title" value={title} onChange={InputChangeFeilds} />
              </div>

              <div className="form-group">
                <label>Body</label>
                <textarea name="" id="edit_post_body" cols="30" rows="10" placeholder="Body" className="form-control" value={body} onChange={bodyChangeFeilds}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={disabled}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
