import React from 'react';
import styled from 'styled-components';
import './start.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Post = styled.div`
  border-top: 1px solid #2B547E;
  margin: 0.7em;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
  border: 3px solid transparent;`;

class Startpage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
      <div className="main grid-start">
        <header><div className="blue-txt txt-lg bold" style={{textAlign: "left"}}> &nbsp; Dreammy <i className="material-icons v-align">cloud</i></div></header>
        <div className="imagebox top">
           <div className="bg-transparent">
                <img  className="img" src="https://scontent.fmem1-1.fna.fbcdn.net/v/t1.15752-9/55835899_2315883065360436_2904164234520690688_n.png?_nc_cat=106&_nc_ht=scontent.fmem1-1.fna&oh=aef9b0bdce22b63568c0e263f7b79227&oe=5D06746F" alt="pic"/>
          </div>
          </div>
        <div>
          <h3 className="blue-txt center stack">Connecting to Your Dreams!</h3>
          <h5 className="blue-txt center stack">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm</h5>
        </div>
        <div className="center" >
        <Post className="stack">
          {//<button className="btn bordered long" onClick={this.props.login}>Login</button>
          }
        <Link className="" to="/login">  <button className="btn bordered long">Log In</button></Link>
        <Link className="" to="/signup">  <button className="btn bordered long">Sign Up</button></Link>
        </Post>
        </div>
        <button className="btn-floating blue-bg btn-large bottom">
            <i className="material-icons font-lg">message</i>
        </button>
        </div>
        </div>
    );
  }
}
export default Startpage;
