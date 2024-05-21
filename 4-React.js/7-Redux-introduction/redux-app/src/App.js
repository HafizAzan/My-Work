import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decreament, increament } from './redux/duck/Counter';


function App() {
  const count = useSelector((state) => state?.counter?.count)
  const dispatch = useDispatch()

  const increamentHandler = () => {
    dispatch(increament())
  }

  const decrementHandler = () => {
    dispatch(decreament())
  }
  return (
    <div className="App">
      <h1>Counter : {count} </h1>

      <button onClick={increamentHandler}>Increment</button>
      <button onClick={decrementHandler}>decrement</button>

    </div>
  );
}

export default App;
