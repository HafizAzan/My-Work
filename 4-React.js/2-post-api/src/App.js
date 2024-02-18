/** @format */

import React, { useEffect, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import CreatePopup from "./components/Create-Popup";
import EditPost from "./components/Edit-Post";
import SpinnerLoader from "./components/Spinner-Loader";

export const BaseApiUrl = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPostSave] = useState([]);
  const [editPostId, setEditPostId] = useState(null);
  const [loader, setloader] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setloader(true);
    fetch(BaseApiUrl)
      .then((Response) => Response.json())
      .then((data) => {
        setPostSave(data);
        console.log(data, "data is here");
        setloader(false);
      })
      .catch((error) => {
        console.error(error);
        setloader(false);
      });
  };

  const DeletePostReal = (postId) => {
    setloader(true);
    fetch(`${BaseApiUrl}/${postId}`, {
      method: "DELETE",
    })
      .then(() => {
        Swal.fire("This Post Is Deleted SuccesFully!", " ", "success");
        setloader(false);
      })
      .catch(() => {
        setloader(false);
        Swal.fire("This Post Is Not Deleted SuccesFully!", " ", "error");
      });
  };

  const DeleteBtnSingleRow = (event, postId) => {
    event.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          DeletePostReal(postId);
        } else {
          Swal.fire("This Post Is Not Deleted SuccesFully!", " ", "error");
        }
      });
    console.log("deleted!");
  };

  const PopupOpenEdit = (event, PostId) => {
    setloader(true);
    event.preventDefault();
    setEditPostId(PostId);
    window.$("#edit-post").modal("show");
    setloader(false);
  };

  return (
    <React.Fragment>
      <SpinnerLoader loader={loader} />
      <div className="container">
        <h1>Posts</h1>
        <a className="btn btn-primary" data-toggle="modal" href="#create-post">
          Create Post
        </a>
        <CreatePopup getPosts={getPosts} />

        <EditPost editPostId={editPostId} getPosts={getPosts} />

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Post Id</th>
              <th>User Id</th>
              <th>Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody id="todos-listing">
            {posts.map((singlePost) => {
              return (
                <tr key={singlePost.id}>
                  <td>{singlePost.id}</td>
                  <td>{singlePost.userId}</td>
                  <td>{singlePost.title}</td>
                  <td>
                    <button className="btn btn-primary" onClick={(event) => PopupOpenEdit(event, singlePost.id)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={(event) => DeleteBtnSingleRow(event, singlePost.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default App;
