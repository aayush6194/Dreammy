import React from 'react';
import { cloudinaryUrl } from '../utils/utils';
import styled from 'styled-components';
import Stats from './Stats';
import SocialLinks from './SocialLinks';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const ProfileImg = styled.img`;
 border-radius: 50%;
 display: block;
 border: 2px solid #006666;
 margin: 0 auto;
 padding: 0.5em;
 object-fit: cover;
 width: 10em;
 height: 10em;`;

export const ProfileHeader = ({firstName, lastName, location, work, imageUrl, facebook, instagram, twitter, me, numPosts})=>(
  <div className="profile-box border">
  {console.log(me)}
    <ProfileImg src={cloudinaryUrl(imageUrl)} alt="user" />
    <div className="bold blue-txt txt-mdd capitalize">{firstName + " "+ lastName}</div>
    {location? <div className="gray">Lives in <span className="blue-txt bold">{location}</span></div>:
           <Link to="/setting" className="bold pointer gray">Add location<i className="material-icons txt-sm">add</i></Link>}
    {work? <div className="gray">Work <span className="blue-txt bold">{work}</span></div>:
           <Link to="/setting" className="bold pointer gray">Add Work <i className="material-icons txt-sm">add</i></Link>}


    {!me?
      <div>
      <button className="hover bordered">Add</button>
        <button className="bordered hover">Message</button>
      </div>: <div>
                <Link style={{marginRight: "0.1em"}} to="/category"><button className="bordered hover" >Saved Posts</button></Link>
                <Link to="/setting"><button className="bordered hover" >Change Details</button></Link>
              </div>}
      <Stats numPosts={numPosts}/>
      <SocialLinks facebook={facebook} instagram={instagram} twitter = {twitter} />
   <div className="blue-txt">
    </div>
      <div className="">
        <a  style={{padding: "0.5em", float: "right"}}  className="end gray txt-md pointer bold">More Info</a>
      </div>
    </div>
);

export default ProfileHeader;
