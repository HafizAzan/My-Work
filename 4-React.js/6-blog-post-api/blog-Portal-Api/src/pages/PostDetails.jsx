/** @format */

import React from "react";

function PostDetails() {
  return (
    <div>
      <h1>Blog Post Title</h1>
      <p className="lead">
        by <a href="index.php">Start Bootstrap</a>
      </p>
      <p>
        <span className="glyphicon glyphicon-time"></span> Posted on August 28, 2013 at 10:45 PM
      </p>
      <hr />
      <img className="img-responsive" src="http://placehold.it/900x300" alt="" />
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quasi, fugiat, asperiores harum voluptatum tenetur a possimus nesciunt quod accusamus saepe tempora ipsam distinctio minima dolorum perferendis labore impedit voluptates!</p>
      <a className="btn btn-primary" href="#">
        Read More <span className="glyphicon glyphicon-chevron-right"></span>
      </a>

      <hr />

      <h2>
        <a href="#">Blog Post Title</a>
      </h2>
      <p className="lead">
        by <a href="index.php">Start Bootstrap</a>
      </p>
      <p>
        <span className="glyphicon glyphicon-time"></span> Posted on August 28, 2013 at 10:45 PM
      </p>
      <hr />
      <img className="img-responsive" src="http://placehold.it/900x300" alt="" />
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, voluptates, voluptas dolore ipsam cumque quam veniam accusantium laudantium adipisci architecto itaque dicta aperiam maiores provident id incidunt autem. Magni, ratione.</p>
      <a className="btn btn-primary" href="#">
        Read More <span className="glyphicon glyphicon-chevron-right"></span>
      </a>

      <hr />

      <ul className="pager">
        <li className="previous">
          <a href="#">&larr; Older</a>
        </li>
        <li className="next">
          <a href="#">Newer &rarr;</a>
        </li>
      </ul>
    </div>
  );
}

export default PostDetails;
