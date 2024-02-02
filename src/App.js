import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [val,setval]=useState("hello")
  let [val1,setval1]=useState(12)

  let [val2,setval2]=useState()
  let [val3,setval3]=useState()
  let [ans,setand]=useState()


  const btnchange = ()  => 
  {
    setval('welcome yami...😊')
    setval1(val1 + 10)
  }

  const btnform = () => {
    setand(parseInt(val2) + parseInt(val3))
  }

  return (
    <div className="App">
      <h1>{val}</h1>
      <h1>{val1}</h1>
      <input type='button' value='click' onClick={btnchange}></input>
      <div style={{margin:'30px'}}>
        <input type='text' onChange={(e) => {setval2(e.target.value)}}></input>
        <input type='text' onChange={(e) => {setval3(e.target.value)}}></input>
        <input type='text' value={ans}></input>
        <input type='button' value='click' onClick={btnform}></input>
      </div>
    </div>
  );
}

export default App;
