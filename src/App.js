import React from 'react';
import Dashboard from './Dashboard.js';
import Profile from './Profile.js';
import Setting from './Setting.js';
import Startpage from './Startpage.js';
import Signup from './Signup.js';
import Category from './Category';
import Login from './Login.js';
import FixedNav from './components/FixedNav.js';
import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from './utils/utils';
import {withRouter} from 'react-router';
import Loader from  './components/Loader2';
import api from './api';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false, tokenChecked: false, contentLoaded: false, submitting: false,
      fields:{}, user: {imageUrl: "v1555894582/a/zvw5nufptxzutn9yo7yc.png"},
      data:{post: [] },
      modal:{imageUrl:"", text: "", show: false},
      error: false
    };

    this.actions = {
      checkToken: this.changeToken, onChange: this.onChange,
      setPosts: this.setPosts, contentNotLoaded : this.contentNotLoaded,
     refreshPosts : this.refreshPosts,submitPost : this.submitPost,
     addComments : this.addComments
    }
  }
 componentWillMount() {this.checkToken()}
 componentDidCatch(err, info){
   alert("error")
 }
  checkToken = () =>{
    api.checkToken()
      .then(res => {
        if(res.success){
          this.setState({loggedin: true, tokenChecked: true, user: res.user});
        }
        else
          this.setState({ tokenChecked: true});
        })
      .catch(err => {this.setState({ tokenChecked: true});
      });
  }

  login = res => {this.setState({loggedin: true, tokenChecked: true, user: res})};
  logout = () => {this.setState({loggedin: false});  localStorage.token = null; localStorage.email = null;  };
  onChange = e => {
    const{target: {value, name}} = e;
    this.setState({
      ...this.state,fields:{...this.state.fields, [name]: value}
  });}

  clear = () => {this.setState({...this.state, fields:{}})};

  triggerModal = (content,action) => { this.setState({...this.state, modal: {show: true}})}
  contentNotLoaded = () => {this.setState({contentLoaded: false})}
  setPosts= e => { this.setState({...this.state, data: {...this.state.data, post: e}});}
  submitPost = () => {
    this.setState({submitting: true})
    api.addPost(this.state.fields)
      .then(res => {
        if (res.success) {
          this.setState({fields: {}});
          this.refreshPosts("all");
          if(res.modal){
            alert("Your Post was Saved Privately.");
          }
        }
      }).catch(err=>{alert("Could not submit your post!")});
    setTimeout(()=>{this.setState({submitting: false})}, 200);
  }

 addComments = (id, obj)=>{
//   const post = this.state.data.post.filter((i)=> i._id === id )[0];
//   const newComment = post.comments;
  // newComment.push(obj);
//   this.setState({...this.state, data: {...this.state.data, post: [...this.state.data.post, post]}})
}
  refreshPosts = s => {
    return api.getPosts(s)
    .then(res => {
      if (res.success) {

        this.setPosts(res.data);
        this.setState({contentLoaded: true});
      }
    });}

 setImageUrl= (imageUrl)=> {
   this.setState({user: { ...this.state.user, imageUrl: imageUrl  }})
 }
  changeSucess = (user)=>{
    this.setState({user});
  }

  render() {
  if(this.state.tokenChecked){
      if(this.state.loggedin){
      return (<Router>
                 <FixedNav className="blue-bg"    refreshPosts={this.refreshPosts}/>
                 <Switch>
                   <Route path="/category" render={()=> <Category {...this.state} {...this.actions} />   }/>
                  <Route path="/profile" render={()=> <Profile {...this.state} {...this.actions}  />}  />
                  <Route path="/setting" render={()=> <Setting {...this.state} changeSucess={this.changeSucess} logout={this.logout}   />} />
                  <Route path="/" render={()=> <Dashboard {...this.state} {...this.actions} />   }/>
                  </Switch>
              </Router>
    )} else {return(<Router>
                    <Switch>
                      <Route path="/login"  render={()=>  <Login onChange={this.onChange} login={this.login} clear={this.clear} {...this.state.fields}/>}/>
                      <Route path="/signup"  render={()=> <Signup onChange={this.onChange}  login={this.login} image={this.state.user.imageUrl} setImageUrl={this.setImageUrl} ogin={this.login} clear={this.clear} {...this.state.fields}/>}/>
                      <Route path="/" component={Startpage} />
                    </Switch>
                  </Router>
    )}
      } else{return <Loader/>}
  }}
export default App;
