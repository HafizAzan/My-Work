/** @format */

import React from "react";
import { SaveLocalStorage } from "../../App";

const TaskForm = (props) => {
  const { inputTask, setInputTask, TaskList, setTaskList } = props;
  // console.log(props, "props");
  const TaskInputFeild = (event) => {
    event.preventDefault();
    setInputTask(event.target.value);
  };
  const SubmitForm = (event) => {
    event.preventDefault();
    if (!inputTask) {
      alert("OOPS Plzz Fill This Form Thanks!");
      return;
    }

    const TaskInputTemp = [...TaskList];
    TaskInputTemp.push(inputTask);
    console.log(TaskInputTemp);
    SaveLocalStorage(TaskInputTemp);
    setTaskList(TaskInputTemp);
    setInputTask("");
  };
  return (
    <form id="task-form" onSubmit={SubmitForm}>
      <div className="row">
        <div className="input-field col s12">
          <input type="text" placeholder="New Tasks" name="task" id="task" onInput={TaskInputFeild} value={inputTask} />
        </div>
      </div>
      <input type="submit" value="Add Task" className="btn" />
    </form>
  );
};
export default TaskForm;
