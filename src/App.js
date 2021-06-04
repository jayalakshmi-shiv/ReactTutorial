import React from 'react';
import Counter from './Containers/Login/Counter/Counter'
import Input from './Components/Input/Input'
import Login from './Containers/Login/Login'
import './App.css';

function App() {
  const [greet, setGreet] = React.useState("Welcome Guys!!!");
  const [parent, setParent] = React.useState("I am displaying from parent");
  const [counterMounted, setCounterMounted] = React.useState(true);
  let counterContainer = "";

  const onCounterUnmount = () => {
    setCounterMounted(!counterMounted);
  }

  const updateParent = (value) =>{
    setParent(value);
  }

  setTimeout(() => {
    setGreet("I have updated from parent component")
  }, 3000)

  if (counterMounted) {
    counterContainer = <Counter greet={greet} parentString={parent} updateParent={updateParent}/>;
  }

  return (
    <div className="App" style={{margin:'auto'}}>
       {/* <div>{counterContainer}</div>
      <br />
      <div>
        <button onClick={onCounterUnmount} className={"btn btn-primary"} >(Un)Mount</button>
      </div>
      <br/>
    <Input/> */}
    <Login/>
    </div>
  );
}

export default App;