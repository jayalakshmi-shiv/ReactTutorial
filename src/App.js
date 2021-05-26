import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from './Containers/Counter'
import TrainingInfo from './Containers/TraineeList'
import Login from './Containers/Login/Login';
import ParentComponent from './Containers/PureComponent/ParentComponent';
import HocParent from './Containers/HOC/HocParent'

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
          <Route exact path='/pureComponent' component={ParentComponent}/>
          <Route exact path='/HOC' component={HocParent}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;