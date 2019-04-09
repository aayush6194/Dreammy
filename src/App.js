import React from 'react';
import Dashboard from './Dashboard.js';
import Profile from './Profile.js';
import Setting from './Setting.js';
import FixedNav from './components/FixedNav.js';
import Posts from  './components/Posts';
import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";
import {hashHistory} from "react-router";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
    componentWillMount() { //      <Route exact path="/"  render={()=> <Home />}/>
     }

  render() {
    return (
    <Router>

     <FixedNav className="blue-bg"/>
      <Switch>
        <Route path="/profile" component={Profile} />
      <Route path="/setting" component={Setting} />
        <Route path="/" render={()=> <Dashboard name="ss"/>} />

      </Switch>

    </Router>
    );
  }
}

export default App;
