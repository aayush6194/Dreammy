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
import Loader from  './components/Loader2';
import api from './api';
import { getLocalStorage, setLocalStorage }  from './utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false, tokenChecked: false, contentLoaded: false,
      fields:{},
      user: {},
      data:{post: [] },
      modal:{imageUrl:"", text: "", show: false}
    };
  }
  componentWillMount() {this.checkToken()}

  checkToken = () =>{
    api.checkToken()
      .then(res => {
        if(res.success)
          this.setState({loggedin: true, tokenChecked: true, user: getLocalStorage("user")});
        else
          this.setState({ tokenChecked: true});
        })
      .catch(err => {this.setState({ tokenChecked: true});
      });
  }

  login = (res) => {this.setState({loggedin: true, tokenChecked: true, user: res})};
  logout = () => {this.setState({loggedin: false});  localStorage.token = null; localStorage.email = null;  };
  onChange = e => {
    const{target: {value, name}} = e;
    this.setState({
  ...this.state,fields:{...this.state.fields, [name]: value}
  });}

  clear = () => {this.setState({...this.state, fields:{}})};

  triggerModal = (content,action) => { this.setState({...this.state, modal: {show: true}})}
  contentNotLoaded = () => { this.setState({contentLoaded: false})}
  setPosts= (e) => { this.setState({...this.state, data: {...this.state.data, post: e}});}
  submitPost = () => {
    api.addPost(this.state.fields)
      .then(res => {
        if (res.success) {
          this.refreshAllPosts();
        }
      });
  }

  refreshAllPosts = () => {
    return api.getAllPosts()
    .then(res => {
      if (res.success) {
        this.setPosts(res.data);
        this.setState({contentLoaded: true});
      }
    });
  }

  refreshMyPosts = () => {
    return api.getPosts()
    .then(res => {
      if (res.success) {
        this.setPosts(res.data);
        this.setState({contentLoaded: true});
      }
    });
  }

  submitChange = ()=>{
    api.setFields(this.state.fields)
      .then(res => {
        if (true) {
        alert()
        }
      }).catch((err)=>{console.log(err)});

  }

  render() {
  if(this.state.tokenChecked){
      if(this.state.loggedin){
      return (<Router>
               <FixedNav className="blue-bg"/>
                <Switch>
                  <Route path="/profile" render={()=> <Profile {...this.state} contentNotLoaded = {this.contentNotLoaded}
                                                        refreshMyPosts = {this.refreshMyPosts}/>}  />
                  <Route path="/setting" render={()=> <Setting {...this.state} logout={this.logout}  submitChange={this.submitChange}/>} />
                  <Route path="/" render={()=> <Dashboard
                    {...this.state}
                    onChange={this.onChange}
                    setPosts={this.setPosts}
                    contentNotLoaded = {this.contentNotLoaded}
                    refreshAllPosts = {this.refreshAllPosts}
                    submitPost={this.submitPost} />   }/>
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
