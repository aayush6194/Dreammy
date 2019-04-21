import React from 'react';
import styled from 'styled-components';
import Cloudinary from './Cloudinary';
import Modal from './components/Modal';
import api from './api';
import { cloudinaryUrl } from './utils/utils';
const ProfileImg = styled.img`
 border-radius: 50%;
 display: block;
 border: 2px solid #006666;
 margin: 0 auto;
 padding: 0.5em;
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

class Setting extends React.Component {
constructor(props){
  super(props);
  this.state = {
    modal: false,
    firstNameEdit: false,
    lastNameEdit: false,
    emailEdit: false,
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    imageUrl: this.props.user.imageUrl,
    email:  this.props.user.email
  };
  this.cloudinaryRef = React.createRef();
}

  submit= ()=>{
    api.ChangeFields(this.state.fields)
      .then(res => {
        if (res.success) {
          alert("Changed Sucessfully");
        } else{
            alert("Error");
        }
      }).catch(err=>{ alert("Error")});
  }
  onCloudinaryResult(result) {
    if (result)
      this.setState({imageUrl: result})
    }

  onAttachmentClick = () => {this.cloudinaryRef.current.openImagePicker();
    }


  render() {
    return (
       <div style={{minHeight: "100vh"}} className="containerr" >
        <div className="profile-box full">
         <Modal show={false}/>
          <button  style={{justifySelf:"end", margin: "1em", width:"5em"}} className="bordered hoverr white-txt pointer center" onClick={this.props.logout}>Logout </button>
          <div style={{minHeight: "100vh"}}  className="grid full">
           <ProfileImg className="" src={cloudinaryUrl(this.state.imageUrl)} alt="user" />
              <Cloudinary ref={this.cloudinaryRef} onResult={this.onCloudinaryResult.bind(this)}/>
              <button className="bordered hoverr white-txt pointer center" onClick={this.onAttachmentClick} >Change Profile Picture</button>
              <button className="bordered hoverr white-txt pointer center" onClick={this.submit}>Save Changes</button>

              <Card>
                <span className="bold text-md sp-2-sm">First Name</span>

                 {!this.state.firstNameEdit?
                   <span className="bold text-md">{this.state.firstName}</span> :
                   <input value={this.state.firstName}  onChange={(e)=>{this.setState({firstName: e.target.value})}}/>}

                 {!this.state.firstNameEdit?
                 <i  className="material-icons pointer end blue-txt" style={{justifySelf: "end"}} onClick ={()=>{this.setState({firstNameEdit: true})}}>edit</i> :
                  <i className="material-icons pointer end blue-txt" style={{justifySelf: "end"}} onClick ={()=>{this.setState({firstNameEdit: false})}}>done</i>
                 }
              </Card>

              <Card>
                <span className="bold text-md sp-2-sm">Last Name</span>

                 {!this.state.lastNameEdit?
                   <span className="bold text-md">{this.state.lastName}</span> :
                   <input value={this.state.lastName}  onChange={(e)=>{this.setState({lastName: e.target.value})}}/>}

                 {!this.state.lastNameEdit?
                 <i className="material-icons pointer end blue-txt" onClick ={()=>{this.setState({lastNameEdit: true})}} >edit</i> :
                  <i className="material-icons pointer end blue-txt" onClick ={()=>{this.setState({lastNameEdit: false})}}>done</i>
                 }
              </Card>


              <Card>
                <span className="bold text-md sp-2-sm">Email</span>

                 {!this.state.emailEdit?
                   <span className="bold text-md">{this.state.email}</span> :
                   <input value={this.state.email}  onChange={(e)=>{this.setState({email: e.target.value})}}/>}

                 {!this.state.emailEdit?
                 <i  onClick ={()=>{this.setState({emailEdit: true})}} className="material-icons pointer end blue-txt">edit</i> :
                  <i  className="material-icons pointer end blue-txt" onClick ={()=>{this.setState({emailEdit: false})}}>done</i>
                 }
              </Card>

           <Card>
                 <span className="bold text-md sp-2-sm">Country</span>
                  <span className="bold text-md"></span>
                 <i  style={{justifySelf: "end"}}  className="material-icons end blue-txt">edit</i>
           </Card>

           <Card>
                 <span className="bold text-md sp-2-sm">Facebook</span>
                  <span className="bold text-md"></span>
                 <i  style={{justifySelf: "end"}} className="material-icons end blue-txt">edit</i>
           </Card>

           <Card>
                 <span className="bold text-md sp-2-sm">Instagram</span>
                  <span className="bold text-md"></span>
                 <i  style={{justifySelf: "end"}} className="material-icons end blue-txt">edit</i>
           </Card>

           <Card>
                 <span className="bold text-md sp-2-sm">Twitter</span>
                  <span className="bold text-md"></span>
                 <i  style={{justifySelf: "end"}} className="material-icons end blue-txt">edit</i>
           </Card>



          <div style={{ height: "9em"}}></div>
          </div>
        </div>

      </div>
    );
  }
}

export default Setting;
