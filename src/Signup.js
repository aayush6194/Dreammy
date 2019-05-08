import React from 'react';
import styled from 'styled-components';
import './App.css';
import Cloudinary from './Cloudinary';
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import { setLocalStorage, getLocalStorage } from './utils/utils';
import api from './api';
import countryList from 'react-select-country-list';
import Select from 'react-select'
import { cloudinaryUrl } from './utils/utils';
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
  margin: 1em auto;`;

class Signup extends React.Component {
  constructor(props){
  super(props);
  this.firstName = React.createRef();
  this.lastName = React.createRef();
  this.country = React.createRef();
  this.cloudinaryRef = React.createRef();
}

fetch = () =>{
  api.signup(this.props)
    .then(res => {
      console.log(res)
      if (res.success) {
        setLocalStorage("user", res.user); setLocalStorage("token", res.token);
        this.props.login(res.user);
      }
      else {alert(res.message);}
    })
    .catch(err => {  console.log(err) });
}
onAttachmentClick = () => {this.cloudinaryRef.current.openImagePicker();
}

onCloudinaryResult(result) {
  if (result){
  this.props.setImageUrl(result);
  this.props.onChange({target:{name: "imageUrl", value: result}})
}
}
  render() {
    return (
       <div className="containerr">
         <Zoom>
        <div className="singup-box full">
        <Grid>
         <Link className="" to="/"> <i className="material-icons blue-txt pointer">arrow_back</i></Link>
          <div style={{alignSelf: "center" }}>
          <MdImg className="md" src={cloudinaryUrl(this.props.image)} alt="user" />
          <div >
          <div className="center" style={{height: "2em"}}> <Cloudinary ref={this.cloudinaryRef} onResult={this.onCloudinaryResult.bind(this)}/></div>
            <button className="bordered" style={{display:"block", margin:"auto"}} onClick={this.onAttachmentClick}>Add a Picture </button>
          </div>
            <div className="row" >
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
                  <Select name="country"
                          onChange={(e)=>{this.props.onChange({target:{name: "country", value: e.value}})}}
                          options={countryList().getData()}/>
                </div>
                <div  style={{justifySelf: "stretch"}}>
                 <div className="" style={{marginBottom: ".5em"}}>By clicking Sign Up, you agree to our <a className="blue-txt" href="https://res.cloudinary.com/dqklw4e9q/image/upload/v1557290019/a/y2sutapjd3v6ewjko3xx.pdf">Terms, Data Policy and Cookies Policy.</a></div>
                  <button style={{ float: "right"}} className="bordered" onClick={()=>this.fetch()}>Sign Up</button>
                </div>
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
