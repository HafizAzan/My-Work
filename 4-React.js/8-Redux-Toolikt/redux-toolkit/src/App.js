import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/slices/CounterSlice';

function App() {
  const count = useSelector((state) => state?.counter?.count)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  return (
    <div className="App">
      <h1>Counter : {count}</h1>

      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>

    </div>
  );
}

export default App;
