/** @format */

import React from "react";
// import SinglePost from "../component/SinglePost";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { Spin } from "antd";
import { ServieSearch } from "../services/search.service";
import SinglePost from "../component/SinglePost";

function SearchService() {
  const { query } = useParams();

  const { data: SearhOpt, isLoading: LoaderSearch } = useQuery(["search", query], () => ServieSearch.SearchFilter({ query_custom: query }), {
    enabled: Boolean(query),
  });

  const Var_Search_Opt = SearhOpt?.data?.results;

  return (
    <Spin spinning={LoaderSearch}>
      <h1>Search Details</h1>
      {Var_Search_Opt?.length > 0 ? Var_Search_Opt?.map((singlePost) => <SinglePost singlePost={singlePost} />) : !LoaderSearch && <h2>No Post Found</h2>}
    </Spin>
  );
}

export default SearchService;
