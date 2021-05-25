import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from './Counter'
import TrainingInfo from './TraineeList'
import Login from './Login/Login';
import NotFound from './NotFound'
import './App.css';

function App() {
  return (
    <div className="App AppContainer">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/counter' component={Counter} />
          <Route exact path='/trainingInfo' component={TrainingInfo} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;