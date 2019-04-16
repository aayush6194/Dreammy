import React from 'react';
import styled from 'styled-components';
import Posts from  './components/Posts';
import './App.css';
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr  1fr;
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
 let API = "http://localhost:3009/login";
  fetch(API, {
      method: 'POST', headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: `email=${this.props.email}&password=${this.props.password}`,
      }).then(function(response) {
          return response.json();
     }).then((data)=>{
        if(data.login){
        alert("Logged In");
        localStorage.email =this.props.email;
        localStorage.token = data.token;
         this.props.login();

     } else{ alert("Try Again")}
     }).catch(function(err) {});
}
  render() {
    return (
       <div className="containerr">
       <Zoom>
        <div className="singup-box full">
          <Grid>
          <Link className="" to="/"> <i className="material-icons blue-txt pointer">arrow_back</i></Link>
          <h3 className="center bold" style={{fontSize: "3.5em"}}>Dreammy </h3>
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
                  <a href="#" className="forgetpass" style={{float: "right"}}>Forgot Password?</a>
                  </div>
                 </div>
                <div >
                  <button  className="bordered" style={{width: "100%"}} onClick={()=>this.fetch()}>Submit</button>
                </div>
                <a href="#" className="dnthave">Don’t have an account? Sign up</a>
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
