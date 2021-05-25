import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from './Counter'
import TrainingInfo from './TraineeList'
import Login from './Login/Login'
import './App.css';

function App() {
  return (
    <div className="App" style={{ margin: "auto", width: "50%" }}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/counter' component={Counter} />
          <Route exact path='/trainingInfo' component={TrainingInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
