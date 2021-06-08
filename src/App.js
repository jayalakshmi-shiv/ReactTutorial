import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Containers/Login/Login'
import Counter from './Containers/Counter/Counter'
import HocParent from './Containers/HOC/HocParent'
import ParentComponent from './Containers/PureComponent/ParentComponent'
import NotFound from './NotFound'


function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route exact path='/' component={Counter} />
          <Route exact path='/counter' component={Counter} />
          <Route exact path='/hoc' component={HocParent} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/pureComponent' component={ParentComponent} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;