/** @format */

import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { postService } from "../services/posts.service";
import { helperService } from "../utils/helper";
import { URL_Path } from "../utils/constant";
import { Spin, message } from "antd";
import { StoreComment } from "../services/comment.service";

function PostDetails() {
  const { postID } = useParams();
  const [commentValue, setCommentValue] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const { data: PostsDetails, isLoading: DetailLoader } = useQuery(["postsDetails", postID], () => postService.getPostById(postID), {
    enabled: Boolean(postID),
  });

  const DetailData = PostsDetails?.data?.results;
  const { mutateAsync: CommentStoreData, isLoading: LoaderComment } = useMutation(["comments", postID], (payload) => StoreComment.commentStore(payload));

  const ContentButnHandler = (event) => {
    event.preventDefault();
    setCommentValue(event.target.value);
  };

  const SubmitButtonComment = (event) => {
    event.preventDefault();
    const payload = {
      comment_content: commentValue,
      post_id: postID,
    };

    CommentStoreData(payload, {
      onSuccess: () => {
        messageApi.open({
          type: "success",
          content: "Comment is added successfully but approval is required ",
        });
        setCommentValue("");
      },
    });
  };

  return (
    <Spin spinning={DetailLoader}>
      {contextHolder}
      <h1>Blog Post Details</h1>
      <h1>{DetailData?.post_title}</h1>
      <p className="lead">
        by <Link href="index.php">{DetailData?.post_author}</Link>
      </p>
      <p>
        <span className="glyphicon glyphicon-time"></span> Posted on {""}
        {helperService.convertDate(DetailData?.post_date)}
      </p>
      <hr />
      <Link to={URL_Path.post_details.replace(":postID", DetailData?.id)}>{DetailData?.image ? <img src={DetailData?.image} /> : <img className="img-responsive" src="http://placehold.it/800x400" alt="" />}</Link>

      <hr />
      <h3>{DetailData?.post_content}</h3>

      <hr />
      <div class="well">
        <h4>Leave a Comment:</h4>
        <form role="form" onSubmit={SubmitButtonComment}>
          <div class="form-group">
            <textarea class="form-control" rows="3" onChange={ContentButnHandler} value={commentValue}></textarea>
          </div>
          <button type="submit" class="btn btn-primary" disabled={!Boolean(commentValue) && !LoaderComment}>
            Submit
          </button>
        </form>
      </div>

      <hr />

      {/* <!-- Posted Comments --> */}

      {/* <!-- Comment --> */}

      <div class="media">
        <a class="pull-left" href="#">
          <img class="media-object" src="http://placehold.it/64x64" alt="" />
        </a>
        <div class="media-body">
          <h4 class="media-heading">
            Start Bootstrap
            <small>{helperService.convertDate(DetailData?.post_date)}</small>
          </h4>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>
    </Spin>
  );
}

export default PostDetails;
