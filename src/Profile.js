import React from 'react';
import styled from 'styled-components';
import Posts from  './components/Posts';
import './App.css';
import Loader2 from  './components/Loader2';
import api from './api';
import {ProfileHeader} from './components/Header';

const Post = styled.div`
  border-top: 1px solid #2B547E;
  margin: 0.7em;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
  border: 3px solid transparent;`;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.param = this.getUrlVars()["user"];
    this.notMe = this.param && !(this.param === "me" || this.param === "" || this.param === this.props.user._id);
    this.state ={
      data: this.props.user, user: true, me: !this.notMe
    };
  }

  componentWillMount(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.props.contentNotLoaded();
    if(this.notMe){
    api.getDetails({_id: this.param}).
    then(res=>{
      if(res.success){
      this.setState({data: res.data})}
      else{
        alert("User Not Found");
        this.setState({user: false})
      }
    }).
    catch(err=>{alert(err); this.setState({user: false});});
  }
  }

  componentDidMount(){
  if(this.notMe)
    this.props.refreshPosts(this.param);
  else
    this.props.refreshPosts("me");
  }

 getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
 }

  render() {
    const {contentLoaded, data} = this.props;
    const {firstName, lastName, work, location, facebook, instagram, twitter} = this.state.data;
    return (
      <div className="containerr">
        <ProfileHeader {...this.state.data} me={this.state.me} numPosts={this.props.data.post.length}/>

        <div className="main">
         <div className="txt-lg blue-txt bold center">2019</div>
         {!contentLoaded? <div><Loader2 /><div style={{height: "80em"}}></div></div> : null}
         {contentLoaded && data.post.length == 0?
        <Post className="pad"><h4 className="center bold blue-txt">No Post to Show!</h4></Post> :
        data.post.map((data, i) =><Posts key={i} userImage={this.props.user.imageUrl} addComments={this.props.addComments} user={this.props.user._id} post={data}/>)}
        <div style={{ height: "9em"}}></div>
        </div>
        </div>

    );
  }
}

export default Profile;
