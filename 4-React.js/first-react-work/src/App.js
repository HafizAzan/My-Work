import './App.css';
import { useState } from 'react';
import DisplayCount from './component/DisplayCount';
import ContactUs from './component/ContactUs';

const task = [
  {
    name : "task-one",
  },
  {
    name : "task-two",
  },
  {
    name : "task-three",
  },
  {
    name : "task-4",
  },
  {
    name : "task-5",
  },
  {
    name : "task-6",
  },
  {
    name : "task-7",
  },
  {
    name : "task-8",
  },
]

function App() {
  // let count = 0  waja plus na hone ki q ke ismai hamai hook use krna hoga jabhi hoga hal esay nhi hota
  const [count, setCount] = useState(0);
  const [isShowWriting, setIsShowWirting] = useState(true); 
  const increaseMent = () =>{
    // count = count + 1
    setCount(count + 1) // is setCount ke pechay re -render yani refresh krra hoga component ko
    console.log(count , "cliked!")
  }
  
  const disincreament = () =>{
    setCount(count - 1) 
  }

  const ShowBtn = () => {
    setIsShowWirting(true)
  }

  const hideBtn = () => {
    setIsShowWirting(false)
  }

  const changing = (e) =>{
    let current = e.target;
    if( current.value <= 0){
      current.value = 0
      setCount(count = 0) 
    }
  }

  console.log("component is refresh")
  return (
    <div className='centerKrna'>
    <DisplayCount count ={count} />
    <button onClick ={increaseMent}>Increase</button>  &nbsp;
    <button onClick={disincreament}>disincrease</button>
    <br/>
    {isShowWriting && <h1>Show And Hide Just Click</h1>}
    <button onClick ={ShowBtn}>showBTn</button>  
    <button onClick={hideBtn}>HideBtn</button> &nbsp;
    <br/>
    <button onClick={() => setIsShowWirting(!isShowWriting)}>
    show/hide
      </button>
      <br />
    {/* listing or loop  */}
      {task.map((singleTask,index) => {
      return <p key={index}>{singleTask.name}</p>
    })}

    <ContactUs />
    </div>
  )
}

export default App;
