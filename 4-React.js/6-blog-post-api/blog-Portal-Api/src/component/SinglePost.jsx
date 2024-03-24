/** @format */

import React from "react";
import { helperService } from "../utils/helper";
import { Link } from "react-router-dom";
import { URL_Path } from "../utils/constant";

function SinglePost({ singlePost }) {
  return (
    <div>
      <>
        <h2 key={singlePost?.id}>
          <Link to={URL_Path.post_details.replace(":postID", singlePost?.id)}>{singlePost?.post_title}</Link>
        </h2>
        <p className="lead">
          by <Link to={URL_Path.post_details.replace(":postID", singlePost?.id)}>{singlePost?.post_author}</Link>
        </p>
        <p>
          <span className="glyphicon glyphicon-time"></span> &nbsp;{helperService.convertDate(singlePost?.post_date)}
        </p>
        <hr />
        <Link to={URL_Path.post_details.replace(":postID", singlePost?.id)}>{singlePost?.image ? <img src={singlePost?.image} /> : <img className="img-responsive" src="http://placehold.it/800x400" alt="" />}</Link>
        <hr />
        <p>{singlePost?.post_content}.</p>
        <Link className="btn btn-primary" to={URL_Path.post_details.replace(":postID", singlePost?.id)}>
          Read More <span className="glyphicon glyphicon-chevron-right"></span>
        </Link>

        <hr />
      </>
    </div>
  );
}

export default SinglePost;
