import React from 'react';
import Counter from './Counter'
import './App.css';

function App() {

  const [counterValue, setCounterValue] = React.useState(0);
  const [counterMounted, setCounterMounted] = React.useState(true);
  const [parentString, setParentString] = React.useState("I am displaying from parent")
  const [greet, setGreet] = React.useState("Welcome Guys!!!");
  let counterContainer = "";

  const onCounterUnmount = () => {
    setCounterMounted(!counterMounted);
  }

  setTimeout(() => {
    setGreet("I have updated from parent component")
  }, 3000)

  if (counterMounted) {
    counterContainer = <Counter greet={greet} counterValue={counterValue} parentString={parentString} updateParent={setParentString}/>;
  }


  return (
    <div className="App" style={{margin:"auto",width:"50%"}}>
      <div>{counterContainer}</div>
      <br/>
      <div style={{textAlign:"left"}}>
      <button onClick={onCounterUnmount} className={"btn btn-primary"} >(Un)Mount</button>
      </div>
    </div>
  );
}

export default App;
