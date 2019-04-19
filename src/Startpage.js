import React from 'react';
import styled from 'styled-components';
import './start.css';
import logo from './images/logo.png';
import img1 from './images/img.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Post = styled.div`
  border-top: 1px solid #2B547E;
  margin: 0.7em;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
  border: 3px solid transparent;`;


const Header = styled.header`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
@media(max-width: 800px){
  grid-template-columns: 1fr;
}`;

class Startpage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
      <div className="main grid-start">
        <Header>
          <img className="sm-logo" src={logo} alt="Logo" style={{margin: 0}}/>
          <img  className="img pad" src={img1} alt="pic"/>
        </Header>

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
