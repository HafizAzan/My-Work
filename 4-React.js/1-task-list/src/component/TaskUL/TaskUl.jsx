/** @format */

import React from "react";

const TaskUl = ({ name, index, removeBtnHandler }) => {
  return (
    <li className="collection-item">
      {name}
      <a href="#" className="delete-item secondary-content">
        <i className="fa fa-remove" onClick={() => removeBtnHandler(index)}></i>
      </a>
    </li>
  );
};

export default TaskUl;
