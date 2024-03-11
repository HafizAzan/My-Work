/** @format */

import React from "react";

function Home() {
  return (
    <div>
      <h1 className="page-header">
        Page Heading
        <small>Secondary Text</small>
      </h1>

      <h2>
        <a href="#">Blog Post Title</a>
      </h2>
      <p className="lead">
        by <a href="index.php">Start Bootstrap</a>
      </p>
      <p>
        <span className="glyphicon glyphicon-time"></span> Posted on August 28, 2013 at 10:00 PM
      </p>
      <hr />
      <img className="img-responsive" src="http://placehold.it/900x300" alt="" />
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>
      <a className="btn btn-primary" href="#">
        Read More <span className="glyphicon glyphicon-chevron-right"></span>
      </a>

      <hr />
    </div>
  );
}

export default Home;
