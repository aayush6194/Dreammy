import React from 'react';
import styled from 'styled-components';
import Posts from  './components/Posts';
import './App.css';
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import { setLocalStorage, getLocalStorage } from './utils/utils';
import api from './api';

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto  1fr;
  border: 3px solid #006666;
  border-radius: .5em;
  padding: 0.5em;
  margin: 0.7em;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  background:  linear-gradient(45deg, #E0E0E0, #BFC9CA);`;

 const MdImg = styled.img`
 border: 2px solid #006666;
  width: 8em;
  height: 8em;
  border-radius: 50%;
  display: inline-block;
  padding: 0;
  display: block;
  margin: 3em auto;
`;

class Signup extends React.Component {
constructor(props){super(props);}

fetch = () =>{
  console.log(`login comp ${this.props.email} ${this.props.password}`);
  api.signup(this.props)
    .then(res => {
      if (res.success) {
        setLocalStorage("user", res.user); setLocalStorage("token", res.token);
        this.props.login(res.user);
      }
      else {alert("Try again");}
    })
    .catch(err => alert("Try again"));
}

  render() {
    return (
       <div className="containerr">
         <Zoom>
        <div className="singup-box full">
        <Grid>
         <Link className="" to="/"> <i className="material-icons blue-txt pointer">arrow_back</i></Link>
          <div style={{alignSelf: "center"}}>
          <MdImg className="md" src={"https://res.cloudinary.com/danu5qwvx/image/upload/v1555553124/xfkxduguslygi2ses8pt.png"} alt="user" />
            <div className="row">
            <form>
                <div className="row">
                  <div className="input-field col s6">
                    <input placeholder="Placeholder" id="first_name" name="firstName" type="text" className="validate" onChange={this.props.onChange}/>
                    <label className="active" htmlFor="first_name">First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="last_name" type="text" name="lastName" className="validate" onChange={this.props.onChange}/>
                    <label className="active" htmlFor="last_name">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                  <label className="active" htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" className="validate" onChange={this.props.onChange}/>
                  </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" name="password" className="validate" onChange={this.props.onChange}/>
                    <label className="active" htmlFor="password">Password</label>
                  </div>
                </div>
                </div>
                <div  style={{justifySelf: "stretch"}}>
                  <button style={{ float: "right"}} className="bordered" onClick={()=>this.fetch()}>Submit</button>
                </div>
          </form>
            </div>
            </div>
          </Grid>

        </div>
          </Zoom>
      </div>
    );
  }
}

export default Signup;
