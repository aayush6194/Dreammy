import React from 'react';
import Dashboard from './Dashboard.js';
import Profile from './Profile.js';
import Setting from './Setting.js';
import Startpage from './Startpage.js';
import Signup from './Signup.js';
import Login from './Login.js';
import FixedNav from './components/FixedNav.js';
import Posts from  './components/Posts';
import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";
import {hashHistory} from "react-router";
import Loader from  './components/Loader';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
      tokenChecked: false,
      fields:{},
      data:{
        post: [ ]
      }
    };
//    this.postSet = this.postSet.bind(this)
  }
//
// postSet(i){
//  return 0;
//
//   }
  componentWillMount() {this.fetch()}

  fetch = () =>{
    let API = "http://localhost:3009/token";
    let email = localStorage.getItem('email'), token = localStorage.getItem('token');

  if(token != null){
    fetch(API, {
        method: 'POST', headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: `email=${email}&token=${token}`,
        }).then(function(response) {
            return response.json();
       }).then((data)=>{
         if(data.loggedin){
          this.setState({loggedin: true, tokenChecked: true});
         }
         else{this.setState({ tokenChecked: true});}
       }).catch(function(err) {});
   } else{
     this.setState({ tokenChecked: true});
   }
  }

  login = ()=>{this.setState({loggedin: true, tokenChecked: true})};
  logout = ()=>{this.setState({loggedin: false});  localStorage.token = null; localStorage.email = null;  };
  onChange = e =>{
    const{target: {value, name}} = e;
    this.setState({
      ...this.state,
      fields:{...this.state.fields, [name]: value}
  });}

  clear = ()=>{this.setState({...this.state, fields:{}})};

  setPosts= (e)=>{console.log(e); this.setState({...this.state, data: {...this.state.data, post: e}});}

  render() {
  if(this.state.tokenChecked){
      if(this.state.loggedin){
      return (<Router>
               <FixedNav className="blue-bg"/>
                <Switch>
                  <Route path="/profile" render={()=> <Profile {...this.state} />}  />
                  <Route path="/setting" render={()=> <Setting {...this.state} logout={this.logout}/>} />
                  <Route path="/" render={()=> <Dashboard {...this.state}  setPosts={this.setPosts}/>   }/>
                </Switch>
              </Router>
    )} else {return(<Router>
                    <Switch>
                      <Route path="/login"  render={()=>  <Login onChange={this.onChange} login={this.login} clear={this.clear} {...this.state.fields}/>}/>
                      <Route path="/signup"  render={()=> <Signup onChange={this.onChange} login={this.login} clear={this.clear} {...this.state.fields}/>}/>
                      <Route path="/" component={Startpage} />
                    </Switch>
                  </Router>
    )}
      } else{return <Loader/>}
  }}

export default App;
