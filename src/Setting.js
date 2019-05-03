import React from 'react';
import styled from 'styled-components';
import Cloudinary from './Cloudinary';
import Modal from './components/Modal';
import api from './api';
import { cloudinaryUrl } from './utils/utils';
import { setLocalStorage, getLocalStorage } from './utils/utils';
const ProfileImg = styled.img`
 border-radius: 50%;
 display: block;
 border: 2px solid #006666;
 margin: 0.5em auto;
 padding: 0.5em;
 object-fit: cover;
 width: 10em;
 height: 10em;`;

const Card = styled.div`
  border-top: 1px solid #2B547E;
  margin: 0.7em;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
  border: 3px solid transparent;
  display: grid;
  padding: 0.3em;
   grid-template-columns: 1fr 1fr 1fr;
  min-height: 3.8em;
  align-items: center;
  @media(max-width: 400px){
     grid-template-columns: 1fr 1fr;
  }`;

  const Grid2 = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
  `;

class Setting extends React.Component {
constructor(props){
  super(props);

  this.state = {
    firstNameEdit: false, lastNameEdit: false,
    emailEdit: false, passwordEdit: false,
    workEdit: false, facebookEdit: false,
    instagramEdit: false, twitter: false,
    changed: false, user: this.props.user
  };
  this.cloudinaryRef = React.createRef();
}
  submit= ()=>{
    api.ChangeFields(this.state.user)
      .then(res => {
        if (res.success) {
          alert("Changed Sucessfully");
          this.props.changeSucess(this.state.user);
          setLocalStorage("user", this.state.user);
          this.setState({changed: false});
        } else{
            alert("Error");
        }
      }).catch(err=>{ alert("Error")});
  }
  onCloudinaryResult(result) {
    if (result)
      this.setState({user: {...this.state.user, imageUrl: result}})
    }

  onAttachmentClick = () => {this.cloudinaryRef.current.openImagePicker();
  }

  onChange = (e)=>{
 this.setState({changed: true});
  const{target: {value, name}} = e;
      this.setState({user :{...this.state.user, [name]: value} });
  }

  toggleOn = (i)=>{
      this.setState({[i] :  true});
  }
  toggleOff = (i)=>{
      this.setState({[i] : false});
  }

  componentWillUnmount() {
    if(this.state.changed){
      alert("Changes were not Saved!");
    }
  }

  render() {
    const data = this.state.user;
    return (
       <div style={{minHeight: "100vh"}} className="containerr" >
        <div className="profile-box full">
          <button  style={{justifySelf:"end", margin: "1em", width:"6em"}} className="bordered-blue hoverr pointer center" onClick={this.props.logout}>Logout </button>
          <div style={{minHeight: "100vh"}}  className="grid full">
              <ProfileImg className="" src={cloudinaryUrl(data.imageUrl)} alt="user" />
              <div className="center" style={{height: "2em"}}> <Cloudinary ref={this.cloudinaryRef} onResult={this.onCloudinaryResult.bind(this)}/></div>
              <Grid2>
              <button style={{marginRight: "0.2em"}} className="bordered end hoverr white-txt pointer" onClick={this.onAttachmentClick} >Change Profile Picture</button>
              <button className="bordered start hoverr white-txt pointer" onClick={this.submit}>Save Changes</button>
              </Grid2>

              <Card>
                <span className="bold text-md sp-2-sm">First Name</span>
                 {!this.state.firstNameEdit?
                   <span className="bold text-md">{data.firstName}</span> :
                   <input defaultValue={data.firstName}  name="firstName" onChange={this.onChange}/>}

                 {!this.state.firstNameEdit?
                 <i  className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOn("firstNameEdit")}>edit</i> :
                  <i className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOff("firstNameEdit")}>done</i>}
              </Card>

              <Card>
                <span className="bold text-md sp-2-sm">Last Name</span>
                 {!this.state.lastNameEdit?
                   <span className="bold text-md">{data.lastName}</span> :
                   <input defaultValue={data.lastName}  name="lastName" onChange={this.onChange}/>}

                 {!this.state.lastNameEdit?
                 <i  className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOn("lastNameEdit")}>edit</i> :
                  <i className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOff("lastNameEdit")}>done</i>}
              </Card>
              <Card>
                <span className="bold text-md sp-2-sm">Email</span>
                 {!this.state.emailEdit?
                   <span className="bold text-md">{data.email}</span> :
                   <input defaultValue={data.email}  name="email" onChange={this.onChange}/>}
                 {!this.state.emailEdit?
                 <i  className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOn("emailEdit")}>edit</i> :
                  <i className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOff("emailEdit")}>done</i>}
              </Card>

              <Card>
                <span className="bold text-md sp-2-sm">Work</span>
                 {!this.state.workEdit?
                   <span className="bold text-md">{data.work}</span> :
                   <input  defaultValue={data.work}  name="work" onChange={this.onChange}/>}
                 {!this.state.workEdit?
                 <i  className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOn("workEdit")}>edit</i> :
                  <i className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOff("workEdit")}>done</i>}
             </Card>

              <Card>
                <span className="bold text-md sp-2-sm">Facebook ID</span>
                 {!this.state.facebookEdit?
                   <span className="bold text-md">{data.facebook}</span> :
                   <input  defaultValue={data.facebook}  name="facebook" onChange={this.onChange}/>}

                 {!this.state.facebookEdit?
                 <i  className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOn("facebookEdit")}>edit</i> :
                  <i className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOff("facebookEdit")}>done</i>}
              </Card>

              <Card>
                <span className="bold text-md sp-2-sm">Instagram ID</span>
                 {!this.state.instagramEdit?
                   <span className="bold text-md">{data.instagram}</span> :
                   <input  defaultValue={data.instagram}  name="instagram" onChange={this.onChange}/>}

                 {!this.state.instagramEdit?
                 <i  className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOn("instagramEdit")}>edit</i> :
                  <i className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOff("instagramEdit")}>done</i>}
              </Card>

              <Card>
                <span className="bold text-md sp-2-sm">Twitter ID</span>
                 {!this.state.twitterEdit?
                   <span className="bold text-md">{data.twitter}</span> :
                   <input  defaultValue={data.twitter}  name="twitter" onChange={this.onChange}/>}

                 {!this.state.twitterEdit?
                 <i  className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOn("twitterEdit")}>edit</i> :
                  <i className="material-icons pointer end blue-txt"  onClick ={()=>this.toggleOff("twitterEdit")}>done</i>}
            </Card>

           <Card>
                 <span className="bold text-md sp-2-sm">Country</span>
                  <span className="bold text-md"></span>
                 <i  style={{justifySelf: "end"}}  className="material-icons end disabled">edit</i>
           </Card>


          <div style={{ height: "9em"}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Setting;
