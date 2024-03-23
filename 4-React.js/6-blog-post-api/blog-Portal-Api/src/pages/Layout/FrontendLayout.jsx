/** @format */

import React, { useMemo } from "react";
import "../../frontend-assets/css/bootstrap.min.css";
import "../../frontend-assets/css/blog-home.css";
import { Link, Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { CategoryService } from "../../services/categories.service";

function FrontendLayout() {
  const { data: CategoryData } = useQuery("categories", () => CategoryService.getCategory());

  const FiveArray = useMemo(() => CategoryData?.data?.results?.splice(0, 5), [CategoryData]);

  const Ten_Array = useMemo(() => CategoryData?.data?.results?.splice(0, 10), [CategoryData?.data?.results]);

  const Twenty_Array = useMemo(() => CategoryData?.data?.results?.splice(10, 10), [CategoryData?.data?.results]);

  let today = new Date().getFullYear();

  return (
    <>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {FiveArray?.length > 0 &&
                FiveArray?.map((singleArray) => {
                  return (
                    <li key={singleArray?.cat_id}>
                      <a href="#">{singleArray?.cat_title}</a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Outlet />
          </div>

          <div className="col-md-4">
            <div className="well">
              <h4>Blog Search</h4>
              <div className="input-group">
                <input type="text" className="form-control" />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
            </div>

            <div className="well">
              <h4>Blog Categories</h4>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-unstyled">
                    {Ten_Array?.length > 0 &&
                      Ten_Array?.map((singleCategory) => {
                        return (
                          <li key={singleCategory?.cat_id}>
                            <Link to="/">{singleCategory?.cat_title}</Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list-unstyled">
                    {Twenty_Array?.length > 0 &&
                      Twenty_Array?.map((singleCategory) => {
                        return (
                          <li key={singleCategory?.cat_id}>
                            <Link to="/">{singleCategory?.cat_title}</Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="well">
              <h4>Side Widget Well</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
            </div>
          </div>
        </div>

        <hr />

        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Your Website {today} </p>
            </div>
          </div>
        </footer>
      </div>
      <script src="js/jquery.js"></script>

      {/* <!-- Bootstrap Core JavaScript --> */}
      <script src="js/bootstrap.min.js"></script>
    </>
  );
}

export default FrontendLayout;
