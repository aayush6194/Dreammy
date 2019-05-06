import React from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import api from './api';
import { setLocalStorage, getLocalStorage } from './utils/utils';
import logo from './images/logo1.png';
const Grid = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr  auto;
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
  margin: 3em auto;`;

class Login extends React.Component {
constructor(props){super(props);}

fetch = () =>{
  api.login(this.props)
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
     <Zoom >
        <div className="singup-box full">

          <Grid>
          <Link className="" to="/"> <i className="material-icons blue-txt pointer">arrow_back</i></Link>
            <img className="sm-logo center" style={{maxWidth: "20em", width: "20em", maxHeight:"20em", height:"auto"}} src={logo} alt="Logo"/>

          <div style={{padding: "1em", justifySelf:"top"}}>
           <div className="center bold blue-txt">Sign In </div>
            <div className="row">

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
                <div className="row">
                  <div className="input-field col s6">
                  <input type="checkbox"  checked="checked" className="filled-in" checked readOnly/>
                  <span>Remember me</span>
                  </div>
                  <div className="input-field col s6">
                  <a href="#" className="forgetpass" style={{float: "right"}}  onClick={()=>{alert("Feature Under Constuction")}}>Forgot Password?</a>
                  </div>
                 </div>

                <div >
                  <button  className="bordered" style={{width: "100%", height: "3.4em"}} onClick={()=>this.fetch()}>Submit</button>
                </div>
                <Link to="/signup" className="dnthave" >Don’t have an account? Sign up</Link>
            </div>
            </div>
          </Grid>

        </div>
</Zoom>
      </div>
    );
  }
}

export default Login;
