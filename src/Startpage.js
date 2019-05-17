import React from 'react';
import styled from 'styled-components';
import './start.css';
import logo from './images/logo1.png';
import img1 from './images/img.png'
import img2 from './images/img .png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Post = styled.div`
  border-top: 1px solid #2B547E;
  margin: 0.7em;
  width: auto;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
  border: 3px solid transparent;
  display: grid;
  grid-template-columns: 1fr 1fr;

  `;


const Header = styled.header`
display: grid;
grid-column: 1 / span 2;
grid-template-columns: 1fr 1fr;
@media(max-width: 800px){
  grid-column: 1 / span 1;
}
@media(max-width: 600px){
  /* grid-template-columns: 1fr; */
}
`;

class Startpage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
      <div className="grid-start">
        <Header>
        <div className="sm-logo-cont down-on-sm">
          <img className="sm-logo" src={logo} alt="Logo" style={{margin: 0}}/>
        </div>
          <div style={{margin:"1.5em", justifySelf:"end"}}>
            <Link className="" to="/login">  <button className="btn bordered">Log In</button></Link>
          </div>
        </Header>

        <div style={{alignSelf:"center"}} >
          <h3  className="blue-txt center stack">"We Live in Condensation of Our Imagination"</h3>
          <h6 className="blue-txt txt-md bold" style={{textAlign:"right", width:"100%", paddingRight:"2em"}}>- Terence McKenna</h6>
          <div className="center" >
          <div style={{margin:"1em"}}>
          <h5  style={{margin:".3em"}} className="blue-txt center stack">Join Dreammy Now! It's Free.</h5>
          <Link className="" to="/signup">  <button className="round">SIGN UP!</button></Link>
          </div>
          </div>
        </div>
        <div className="img pad">
        <img  style={{maxWidth:"100%"}} src={img1} alt="pic"/>

        <a className="btn-floating blue-bg btn-large bottom" href="mailto:dreammy.help@gmail.com?Subject=Help">
            <i className="material-icons font-lg">email</i>
        </a>
        </div>
        </div>
        </div>
    );
  }
}
export default Startpage;
