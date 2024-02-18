import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './component/TaskForm/TaskForm';
import TaskListLi from './component/TaskUL/TaskList';

const KeysLocalStorage = "Tasks";

export const SaveLocalStorage = (array) => {
  localStorage.setItem(KeysLocalStorage,JSON.stringify(array))
}

export const GetLocalStorage = () => {
  return JSON.parse(localStorage.getItem(KeysLocalStorage))
}

function App() {
  const [inputTask, setInputTask] = useState("");
  const [TaskList, setTaskList] = useState([]);
  const [FilterValueInput, setFilterValueInput] = useState("");

  useEffect(() =>{
    const GetKrnaHaiArrayMai = GetLocalStorage();
    setTaskList(GetKrnaHaiArrayMai);
  }, [])

  const deleteBtnHandler = (event) => {
    event.preventDefault();
    if (window.confirm("Are you Sure?")) {
      SaveLocalStorage([])
      setTaskList([])
    };
  }

  const removeBtnHandler = (index) => {
    if (window.confirm("Are U Sure ?")) {
      const removeTemp = [...TaskList]
      removeTemp.splice(index, 1)
      SaveLocalStorage(removeTemp)
      setTaskList(removeTemp); 
    }
  }

  const FilterChangingHandler = (event) => {
    event.preventDefault();
    setFilterValueInput(event.target.value)
  }

  const TempFilterList = TaskList.filter(singleValue => singleValue.toLowerCase().includes(FilterValueInput.toLowerCase()))

  return (
    <div className="container">
    <div className="row">
      <div className="col s12">
        <div id="main" className="card">
          <div className="card-content">
            <span className="card-title">Task List</span>
              <TaskForm
                inputTask={inputTask}
                setInputTask={setInputTask}
                TaskList={TaskList}
                setTaskList={setTaskList}
              />
          </div>
          <div className="card-action">
            <h5 id="task-title">Tasks</h5>
            <div className="input-field col s12">
      <input type="text" name="filter" id="filter" onChange={FilterChangingHandler} value={FilterValueInput}/>
      <label>Filter Task</label>
    </div>
        <TaskListLi TaskList={TempFilterList} removeBtnHandler={removeBtnHandler}/>
            <a className="clear-tasks btn black" onClick={deleteBtnHandler}>Clear Tasks</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
