/** @format */

import React from "react";
import "../frontend-assets/css/bootstrap.min.css";
import "../frontend-assets/css/blog-home.css";
import { Outlet } from "react-router-dom";

function FrontendLayout() {
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
            <a className="navbar-brand" href="#">
              Start Bootstrap
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
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
                    <li>
                      <a href="#">Category Name</a>
                    </li>
                    <li>
                      <a href="#">Category Name</a>
                    </li>
                    <li>
                      <a href="#">Category Name</a>
                    </li>
                    <li>
                      <a href="#">Category Name</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Category Name</a>
                    </li>
                    <li>
                      <a href="#">Category Name</a>
                    </li>
                    <li>
                      <a href="#">Category Name</a>
                    </li>
                    <li>
                      <a href="#">Category Name</a>
                    </li>
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
              <p>Copyright &copy; Your Website 2014</p>
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
