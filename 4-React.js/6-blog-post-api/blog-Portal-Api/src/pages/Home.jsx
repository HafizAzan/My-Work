/** @format */

import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { postService } from "../services/posts.service";
import { helperService } from "../utils/helper";

function Home() {
  const { data: postsData } = useQuery("posts", () => postService.getPosts());
  const dataPost = useMemo(() => postsData?.data?.results, [postsData?.data?.results]);
  return (
    <div>
      <h1 className="page-header">Blog Posts</h1>
      {dataPost?.length > 0 ? (
        dataPost?.map((singlePost) => {
          return (
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
          );
        })
      ) : (
        <h2>No Post Found</h2>
      )}
    </div>
  );
}

export default Home;
