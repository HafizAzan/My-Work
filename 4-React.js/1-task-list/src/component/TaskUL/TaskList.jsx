/** @format */

import React from "react";
import TaskUl from "./TaskUl";

const TaskListLi = (props) => {
  const { TaskList, removeBtnHandler } = props;
  return (
    <ul className="collection">
      {TaskList.map((SingleTaskList, index) => {
        return <TaskUl key={index} name={SingleTaskList} index={index} removeBtnHandler={removeBtnHandler} />;
      })}
    </ul>
  );
};

export default TaskListLi;
