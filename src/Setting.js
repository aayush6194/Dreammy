import React from 'react';
import styled from 'styled-components';
import 'materialize-css/dist/css/materialize.min.css'

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


  render() {
    return (
       <div style={{minHeight: "100vh"}} className="containerr" >
        <div className="profile-box full">

          <div style={{minHeight: "100vh"}}  className="grid full">
           <ProfileImg className="" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
            <button className="bordered hoverr white-txt pointer center" style={{margin: "1em"}} onClick={this.props.logout}>Logout </button>
        {
          [1,2,3,4,6,7,9,10].map(()=>(<Card>
                 <span className="bold text-md sp-2-sm">Name</span>
                  <span className="bold text-md">Jane Doe</span>
                 <i  style={{justifySelf: "end"}} className="material-icons end blue-txt">edit</i>
                 </Card>))
          }
          <div style={{ height: "9em"}}></div>
          </div>

        </div>

      </div>
    );
  }
}

export default Setting;
