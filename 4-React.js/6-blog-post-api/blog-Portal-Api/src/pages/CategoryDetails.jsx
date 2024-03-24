/** @format */

import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CategoryService } from "../services/categories.service";
import { Spin } from "antd";
import { helperService } from "../utils/helper";
import SinglePost from "../component/SinglePost";

function CategoryDetails() {
  const { catID } = useParams();
  const { data: CatgoryData, isLoading: loaderCategory } = useQuery(["categoryId", catID], () => CategoryService.getCategoryById(catID), {
    enabled: Boolean(catID),
  });

  const CategoryData = CatgoryData?.data?.results;

  console.log(CategoryData);

  return (
    <Spin spinning={loaderCategory}>
      <h1>Category Posts</h1>
      {CategoryData?.posts?.length > 0
        ? CategoryData?.posts?.map((singlePost) => {
            return <SinglePost singlePost={singlePost} />;
          })
        : !loaderCategory && <h2>No Post found</h2>}
    </Spin>
  );
}

export default CategoryDetails;
