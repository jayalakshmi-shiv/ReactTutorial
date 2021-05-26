import React from 'react';
import Counter from './Counter'
import './App.css';

function App() {
  const [greet, setGreet] = React.useState("Welcome Guys!!!");
  const [counterMounted, setCounterMounted] = React.useState(true);
  let counterContainer = "";

  const onCounterUnmount = () => {
    setCounterMounted(!counterMounted);
  }

  setTimeout(() => {
    setGreet("I have updated from parent component")
  }, 3000)

  if (counterMounted) {
    counterContainer = <Counter greet={greet} />;
  }

  return (
    <div className="App" style={{margin:'auto', width:'50%',textAlign: "left"}}>
       <div>{counterContainer}</div>
      <br />
      <div>
        <button onClick={onCounterUnmount} className={"btn btn-primary"} >(Un)Mount</button>
      </div>
    </div>
  );
}

export default App;