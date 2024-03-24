/** @format */

import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { postService } from "../services/posts.service";
import SinglePost from "../component/SinglePost";

function Home() {
  const { data: postsData, isLoading: loader } = useQuery("posts", () => postService.getPosts());
  const dataPost = useMemo(() => postsData?.data?.results, [postsData?.data?.results]);
  if (loader) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="page-header">Blog Posts</h1>
      {dataPost?.length > 0
        ? dataPost?.map((singlePost) => {
            return <SinglePost singlePost={singlePost} key={singlePost?.post_id} />;
          })
        : !loader && <h2>No Post Found</h2>}
    </div>
  );
}

export default Home;
