/** @format */

import React, { useMemo, useState } from "react";
import "../../frontend-assets/css/bootstrap.min.css";
import "../../frontend-assets/css/blog-home.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { CategoryService } from "../../services/categories.service";
import { Authenticated_Path_Url, URL_Path } from "../../utils/constant";
import { Spin } from "antd";
import { ServiceToken } from "../../utils/auth";

function FrontendLayout() {
  const { data: CategoryData, isLoading: loaderCat } = useQuery(
    "categories",
    () => CategoryService.getCategory()
  );

  const FiveArray = useMemo(
    () => CategoryData?.data?.results?.splice(0, 5),
    [CategoryData]
  );

  const Ten_Array = useMemo(
    () => CategoryData?.data?.results?.splice(0, 10),
    [CategoryData?.data?.results]
  );

  const Twenty_Array = useMemo(
    () => CategoryData?.data?.results?.splice(10, 10),
    [CategoryData?.data?.results]
  );

  let today = new Date().getFullYear();

  const navigator = useNavigate();

  const [ValueSearch, setValueSearch] = useState("");

  const SearchingBtnHandler = (event) => {
    event.preventDefault();
    navigator(URL_Path.Search_Details.replace(":query", ValueSearch));
  };

  const SearchingValueHandler = (event) => {
    event.preventDefault();
    setValueSearch(event.target.value);
  };

  return (
    <Spin spinning={loaderCat}>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              {FiveArray?.length > 0 &&
                FiveArray?.map((singleArray) => {
                  return (
                    <li key={singleArray?.cat_id}>
                      <Link
                        to={URL_Path.Category_details.replace(
                          ":catID",
                          singleArray?.cat_id
                        )}
                      >
                        {singleArray?.cat_title}
                      </Link>
                    </li>
                  );
                })}

              {ServiceToken.isUserIsLogged() ? (
                <>
                <li>
                    <Link to={Authenticated_Path_Url.DashBoard}>Dash-Board</Link>
                  </li>
                <li>
                  <a
                    onClick={() => {
                      ServiceToken.removeToken();
                      window.location.href = URL_Path.Home;
                    }}
                  >
                    Logout
                  </a>
                  </li>
                  </>
              ) : (
                <>
                  <li>
                    <Link to={URL_Path.Register}>Register</Link>
                  </li>
                  <li>
                    <Link to={URL_Path.Login}>Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-8" style={{paddingTop: 70}}>
            <Outlet />
          </div>

          <div className="col-md-4">
            <div className="well">
              <h4>Blog Search</h4>
              <form onSubmit={SearchingBtnHandler}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={SearchingValueHandler}
                    value={ValueSearch}
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </form>
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
                            <Link
                              to={URL_Path.Category_details.replace(
                                ":catID",
                                singleCategory?.cat_id
                              )}
                            >
                              {singleCategory?.cat_title}
                            </Link>
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
                            <Link
                              to={URL_Path.Category_details.replace(
                                ":catID",
                                singleCategory?.cat_id
                              )}
                            >
                              {singleCategory?.cat_title}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="well">
              <h4>Side Widget Well</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore, perspiciatis adipisci accusamus laudantium odit
                aliquam repellat tempore quos aspernatur vero.
              </p>
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
    </Spin>
  );
}

export default FrontendLayout;
