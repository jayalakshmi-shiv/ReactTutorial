import React from 'react';
import Counter from './Counter'
import TrainingInfo from './TraineeList'
import Registration from './Login/Login'
import './App.css';

function App() {

  const [counterValue, setCounterValue] = React.useState(0);
  const [counterMounted, setCounterMounted] = React.useState(true);
  const [parentString, setParentString] = React.useState("I am displaying from parent")
  const [greet, setGreet] = React.useState("Welcome Guys!!!");
  const [trainee, setTrainee] = React.useState([{ name: "Puttamraju Anirudh", id: "01" }, { name: "Akshaykumar M", id: "02" }, { name: "Bhumika Motawani", id: "03" },
  { name: "Maram Sharvani", id: "04" }, { name: "Dibyendu Mondal", id: "05" }, { name: "Nilesh Singh", id: "06" }, { name: "Sai J", id: "07" },
  { name: "Sivesh Kumar", id: "08" }, { name: "Shrutika Swadae", id: "09"}, { name: "Sonika", id: "10" }])
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
    <div className="App" style={{ margin: "auto", width: "50%" }}>
      <Registration/>
      {/* <div>{counterContainer}</div>
      <br />
      <div style={{ textAlign: "left" }}>
        <button onClick={onCounterUnmount} className={"btn btn-primary"} >(Un)Mount</button>
      </div>
      <hr/>
      <br/>
      <TrainingInfo trainees={trainee}/> */}
    </div>
  );
}

export default App;
