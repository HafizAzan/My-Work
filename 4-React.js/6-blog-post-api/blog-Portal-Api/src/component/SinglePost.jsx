/** @format */

import React from "react";
import { helperService } from "../utils/helper";

function SinglePost({ singlePost }) {
  return (
    <div>
      <>
        <h2 key={singlePost?.id}>
          <a href="#">{singlePost?.post_title}</a>
        </h2>
        <p className="lead">
          by <a href="index.php">{singlePost?.post_author}</a>
        </p>
        <p>
          <span className="glyphicon glyphicon-time"></span> &nbsp;{helperService.convertDate(singlePost?.post_date)}
        </p>
        <hr />
        {singlePost?.image ? <img src={singlePost?.image} /> : <img className="img-responsive" src="http://placehold.it/800x400" alt="" />}
        <hr />
        <p>{singlePost?.post_content}.</p>
        <a className="btn btn-primary" href="#">
          Read More <span className="glyphicon glyphicon-chevron-right"></span>
        </a>

        <hr />
      </>
    </div>
  );
}

export default SinglePost;
